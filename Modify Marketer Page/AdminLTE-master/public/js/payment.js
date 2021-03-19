function gst(){
      
        var domainprice = document.getElementById("domain_cost").value;
        var domaincost = domainprice * 0.18;
        document.getElementById("domain_GST").value = domaincost;
}

function paymentProcess(){
    var domainprice = document.getElementById("domain_cost").value;
var price = document.getElementById("Plan_price").value;
var gst = document.getElementById("domain_GST").value;
  
    total = parseFloat(gst) + parseFloat(price) + parseFloat(domainprice);

     if(total){
// 	var domainprice = document.getElementById("domain_cost").value;
// var price = document.getElementById("Plan_price").value;
// var gst = document.getElementById("domain_GST").value;

var options = {
    "key": "rzp_test_GmJyzKJA6xsOC6", // Enter the Key ID generated from the Dashboard
    "amount": total * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 means 50000 paise or ₹500.
    "currency": "INR",
    "name": "Hyper Mart",
    "description": "Tutorial",
    // "callback_url": 'https://www.google.com',
    "image": "logo.png",// Replace this with the order_id created using Orders API (https://razorpay.com/docs/api/orders).
    "handler": function (response){
        savetoDB(response);
        $('#myModal').modal();
    },
    "prefill": {
        "name": "",
        "email": "",
        "contact": "",
        "phoneno" : ""
    },
    "notes": {
        "address": "note value"
    },
    "theme": {
        "color": "blue"
    }
}
var propay = new Razorpay(options);
propay.open();
    }   
   else if(price){
        total = document.getElementById("Plan_price").value;
        var options = {
            "key": "rzp_test_GmJyzKJA6xsOC6", // Enter the Key ID generated from the Dashboard
            "amount": total * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 means 50000 paise or ₹500.
            "currency": "INR",
            "name": "Hyper Mart",
            "description": "Tutorial",
            // "callback_url": 'https://www.google.com',
            "image": "logo.png",// Replace this with the order_id created using Orders API (https://razorpay.com/docs/api/orders).
            "handler": function (response){
                savetoDB(response);
                $('#myModal').modal();
            },
            "prefill": {
                "name": "",
                "email": "",
                "contact": "",
                "phoneno" : ""
            },
            "notes": {
                "address": "note value"
            },
            "theme": {
                "color": "blue"
            }
        }
        var propay = new Razorpay(options);
        propay.open();
    }

  
}

// if (typeof response.razorpay_payment_id == 'undefined' || response.razorpay_payment_id < 1) {
//      redirect_url = '/you-owe-money.html';
//     } else { 
//         redirect_url = '/thnx-you-paid.html';
//     }
//     location.href = redirect_url;


function savetoDB(response){
    {
    console.log(response)
   datainsert();
    var name = document.getElementById('fname').value;
    var payRef = firebase.database().ref('payment/');
   
    if (typeof response.razorpay_payment_id == 'undefined' || response.razorpay_payment_id < 1) {
        // redirect_url = 'preloadergeeks.html';
        console.log('failed');
       } else { 
        //    redirect_url = 'preloadergeeks.html';
           console.log('success');
           payRef.child(name).set({
            NameOfStudent: name,
        payment_id : response.razorpay_payment_id
        })
    
       }
}

//    location.href = redirect_url;
}


var firebaseConfig = {
    apiKey: "AIzaSyCMMQ4UxdvijiXdDf4r5eOwrt0cMypioOY",
    authDomain: "marketerswebsite.firebaseapp.com",
    databaseURL: "https://marketerswebsite-default-rtdb.firebaseio.com",
    projectId: "marketerswebsite",
    storageBucket: "marketerswebsite.appspot.com",
    messagingSenderId: "649356297786",
    appId: "1:649356297786:web:1a40270faa147fffe21703",
    measurementId: "G-RC1XMVLDGX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

var user_email_fr_lg2;
function myFunction() {

    prod_no();
    user_email_fr_lg2 =  localStorage.getItem("Email_from_login");
    document.getElementById('Marketer_Email').innerHTML = user_email_fr_lg2 ; 
	
  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
//var year = new Array();
   d = new Date();
   n = month[d.getMonth()];
   year = d.getFullYear();
   current_month =  n + ' ' + year;
  document.getElementById("demo").value = current_month;
}



function datainsert() {
    pnum = document.getElementById('prod_num').value;


var uploadTask = firebase.storage().ref('Logo/'+ pnum).put(files[0]);
uploadTask.on('state_changed', function(snapshot)
      {
          var progress = (snapshot.bytesTransfered / snapshot.totalBytes) * 100;
          document.getElementById('UpProgress').innerHTML = 'upload : '+progress+'%';

      }, 
      function(){
        uploadTask.snapshot.ref.getDownloadURL().then(function(url){
            ImgUrl = url;

  var Client_name_ = document.getElementById("client_name1").value;
  var Project_color_ = document.getElementById("color").value;
  var Project_Number_ = document.getElementById("prod_num").value;
  var Project_description_ = document.getElementById("description").value;
  var Client_number_ = document.getElementById("phonenum").value;
  var Client_mail_ = document.getElementById("mail").value;
  var Plan_ = document.getElementById("cur_plan").value;
  var budget_price= document.getElementById("Plan_price").value;
  var shop_address_ = document.getElementById("address_").value;
  var Client_address_ = document.getElementById("address_").value;
  var month_and_year_ = document.getElementById("demo").value;
  var select_domain_ = document.getElementById("domain_").value;
  var marketer_mob = localStorage.getItem("MOB");
  
firebase.database().ref('Projects/' + month_and_year_ + Client_number_).set({
    Logo: ImgUrl,
    Client_name:Client_name_,
    Client_mail:Client_mail_,
    Client_number:Client_number_,
    Client_address:Client_address_,
    Project_description:Project_description_,
    select_domain:select_domain_,
    month_and_year:month_and_year_,
    Choosen_plan: Plan_,
    Plan_price: budget_price,
    Marketer_mobile:marketer_mob,
    MARKETER_EMAIL: user_email_fr_lg2


    
});
alert("Project added successfully");
});
})
}