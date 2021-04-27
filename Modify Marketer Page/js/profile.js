
 var Marketer_Mobile_Profile;
 var check;
function Marketer_()
{
    var user_email_fr_lg =  localStorage.getItem("Email_from_login");
    document.getElementById('Marketer_Email').innerHTML = user_email_fr_lg; 
	var playersRef = firebase.database().ref("Marketers_Profile/Marketer/");

    playersRef.orderByChild("Email").equalTo(user_email_fr_lg).on("child_added", function(data) {
   
        var Marketer_Email_Profile = data.val().Email;
        var Marketer_Name_Profile = data.val().Candidate_name; 
        Marketer_Mobile_Profile = data.val().Mobile_Number;
        var Marketer_Working_city_Profile = data.val().District;
        var Marketer_Roll_Profile = data.val().Roll_number;
         check= data.val().Bank_account_number;
        document.getElementById('marketer_Profile_name').innerHTML = Marketer_Name_Profile;
        document.getElementById('marketer_Profile_name1').innerHTML = Marketer_Name_Profile;
        document.getElementById('email_').innerHTML =  Marketer_Email_Profile;
        document.getElementById('marketer_roll_').innerHTML = Marketer_Roll_Profile;
        document.getElementById('marketer_roll_1').innerHTML = Marketer_Roll_Profile;
        document.getElementById('mobile_').innerHTML = Marketer_Mobile_Profile;
        document.getElementById('dist_').innerHTML = Marketer_Working_city_Profile;
      if(check){
        document.getElementById("kycshow").className ="col-md-12 kycincom";
        document.getElementById("kychide").className ="card kyccom1";
        
      }
    })

}