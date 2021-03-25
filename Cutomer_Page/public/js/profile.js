function Mobiles()
{
    // $(function(){
    //     $("#nav_bar_for_profile").load("navbar.html"); 
         
    //    });

    var User_id = sessionStorage.getItem('UID_FROM_SIGN_UP');

    console.log("Hello");
   
    firebase.database().ref('client_account/' + User_id).on('value', function(snapshot) {
       
        var a1_address_from_profile = snapshot.val().Address; //getting values from user_account firebase
        var a2_email_from_profile = snapshot.val().Email;
        var a3_fullname_from_profile = snapshot.val().Full_name;
        var a4_mobile_from_profile = snapshot.val().Mobile_number;
        var a5_shop_id_from_profile = snapshot.val().Shop_number;
        var test1_ = snapshot.val().Exp_Date;

        console.log(test1_);
        console.log(a5_shop_id_from_profile);
        
        var a6_cli_name_upper = a3_fullname_from_profile.toUpperCase();

        document.getElementById('fname1').innerHTML = "Name:  " + a3_fullname_from_profile;
        document.getElementById('em1').innerHTML = "Email:  " + a2_email_from_profile;
        document.getElementById('ph1').innerHTML = "Phone:  " + a4_mobile_from_profile;
        document.getElementById('ad1').innerHTML = "Address:  " + a1_address_from_profile;
        document.getElementById('sp1').innerHTML = "Shop Id:  " + a5_shop_id_from_profile;

        document.getElementById('cli_name_upd').innerHTML = a6_cli_name_upper;

    })
}