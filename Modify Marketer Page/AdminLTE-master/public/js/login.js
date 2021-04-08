// var common_client_email;
//var full_name1,email1,mobile_number1,address1,shop_number1;

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
        //window.location = destination;
        console.log('1');
        window.location.href="home.html";
       
        var user = firebase.auth().currentUser;
    
        if(user != null){ 
          var uname = firebase.auth().currentUser.uid;
          console.log(uname);
          // document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
          // document.getElementById('abcx1').innerHTML=uname; 
          localStorage.setItem("userNAME", uname);
          
                
        }
    
      } else {
  
         console.log('3');
      
       //window.location.assign("index.html");  
  
      }
    });
    
    
  
document.getElementById('log_btn_').onclick = function(){

//  alert("hello")
      const userEmail = document.getElementById("marketer_email").value;
      const userPass = document.getElementById("marketer_pass").value;
      

      localStorage.setItem("Email_from_login", userEmail);
      var playersRef = firebase.database().ref("Marketers_Profile/Marketer/");
              playersRef.orderByChild("Email").equalTo(userEmail).once("value",snapshot => {
                snapshot.forEach(function(ChilSnapshot){

                   var district_Name_ = ChilSnapshot.val().District;
                  var Mobile_number_ = ChilSnapshot.val().Mobile_Number;
                  sessionStorage.setItem("DISTRICT_NAME", district_Name_);
                  localStorage.setItem("MOB", Mobile_number_);


                });
                  
               
                // playersRef.orderByChild("Email").equalTo(userEmail).on("child_added", function(data) {
                // var Mobile_number = data.val().Full_name;
                
                
      if(snapshot.exists()){
  
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
  
      window.alert("Error : " + errorMessage);
  
      // ...
    });
  }
  else{
    // console.log('error')
    alert('error');
  }
  });
  }
    
    