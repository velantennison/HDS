// var common_client_email;
//var full_name1,email1,mobile_number1,address1,shop_number1;

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
	  //window.location = destination;

      window.location.assign("index.html");
     
      //document.getElementById("sub").style.display = "block";
      //document.getElementsById("signin").style.display = "none";
  
      var user = firebase.auth().currentUser;
  
      if(user != null){
       
        var uname = firebase.auth().currentUser.uid;   

        sessionStorage.setItem("UID_FROM_SIGN_UP", uname);
      
      window.location.assign("index.html");
          
      }
  
    } else {
      
	   console.log('3');
    // window.location.assign("index.html");

    }
  });
  
  


  function login(){
  
    const userEmail = document.getElementById("email_field").value;
    const userPass = document.getElementById("password_field").value;
    
	console.log(userEmail);
    sessionStorage.setItem("NAME", userEmail);
    sessionStorage.setItem("SURNAME", userPass);

	
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
  
      window.alert("Error : " + errorMessage);
  
    return;
      // ...
    });
  
  }
  
  