firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      window.location.assign("index.html");
      var user = firebase.auth().currentUser;
      if(user != null){
  }

    } else {
	   console.log('3');
    }
  });
  function login(){
    const userEmail = document.getElementById("email_field").value;
    const userPass = document.getElementById("password_field").value;
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) { 
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert("Error : " + errorMessage);
    return;
      // ...
    });
  }
  
  