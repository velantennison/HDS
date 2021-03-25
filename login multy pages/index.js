// var common_client_email;
//var full_name1,email1,mobile_number1,address1,shop_number1;

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
	  //window.location = destination;

      window.location.assign("main.html");
     
      //document.getElementById("sub").style.display = "block";
      //document.getElementsById("signin").style.display = "none";
  
      var user = firebase.auth().currentUser;
  
      if(user != null){
  
        //var email_id = user.email;
        // document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
          
      }
  
    } else {
      // No user is signed in.
      //document.getElementById("sub").style.display = "none";
      // document.getElementById("add_product_to_db").style.display ="none";
     // document.getElementById("signin").style.display = "block";
      // document.getElementById('admin_product').style.display='none'; 
	   console.log('3');
    // window.location.assign("index.html");

    }
  });
  
  


  function login(){
  alert("helo");
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
  
  