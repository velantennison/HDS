// var common_client_email;
//var full_name1,email1,mobile_number1,address1,shop_number1;

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
   
      window.location.assign("index.html");
     
  
      var user = firebase.auth().currentUser;
  
      if(user != null){
  
      
      }
  
    } else {
     
	   console.log('3');
    // window.location.assign("index.html");

    }
  });
  
  


  function login(){
  // alert("hello");
    const userEmail = document.getElementById("email_field").value;
    const userPass = document.getElementById("password_field").value;
    alert(userEmail)
	console.log(userEmail);
    localStorage.setItem("NAME", userEmail);
    localStorage.setItem("SURNAME", userPass);

	
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
  
      window.alert("Error : " + errorMessage);
  
    return;
      // ...
    });
  
  }
  
  