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



var user_email_fr_lg2;
function myFunction() {

    // prod_no();
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

