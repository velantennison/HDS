function Marketer_()
{
    // $(function(){
    //     $("#nav_bar_for_profile").load("navbar.html"); 
         
    //    });

    var user_email_fr_lg =  localStorage.getItem("Email_from_login");
    document.getElementById('Marketer_Email').innerHTML = user_email_fr_lg; 
	var playersRef = firebase.database().ref("Marketers_Profile/Marketer/");

    playersRef.orderByChild("Email").equalTo(user_email_fr_lg).on("child_added", function(data) {
   // firebase.database().ref('Confirm_marketors/' + User_id).on('value', function(snapshot) {
        var Marketer_Email_Profile = data.val().Email;
        var Marketer_Name_Profile = data.val().Candidate_name; //getting values from user_account firebase
        var Marketer_Mobile_Profile = data.val().Mobile_Number;
        var Marketer_Working_city_Profile = data.val().District;
        // var Marketer_Address_Profile= data.val().Address;
        // var Marketer_Name _Profile = snapshot.val().Shop_number;
        // var test1_ = snapshot.val().Exp_Date;

        // console.log(test1_);
        // console.log(a5_shop_id_from_profile);
        
        // var a6_cli_name_upper = a3_fullname_from_profile.toUpperCase();
       
        document.getElementById('marketer_Profile_name').innerHTML = Marketer_Name_Profile;
        document.getElementById('marketer_Profile_name1').innerHTML = Marketer_Name_Profile;
        document.getElementById('email_').innerHTML =  Marketer_Email_Profile;
       
        document.getElementById('mobile_').innerHTML = Marketer_Mobile_Profile;
        document.getElementById('dist_').innerHTML = Marketer_Working_city_Profile;
        // document.getElementById('address_').value = Marketer_Address_Profile;

        // document.getElementById('cli_name_upd').innerHTML = a6_cli_name_upper;
       
    })
}