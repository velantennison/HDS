//window.addEventListener('load', () => {
	
	
 
	   
        
	//	console.log();
		
		//paymentProcess(price);
	//	})
		

functiongh {
	const price = sessionStorage.getItem('SUM1');
		document.getElementById("amount").innerHTML=price;
		document.getElementById("amount1").innerHTML=price;
	
 //var amount= price;

    var options = {
        "key": "rzp_test_GmJyzKJA6xsOC6", // Enter the Key ID generated from the Dashboard
        "amount": price*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 means 50000 paise or ₹500.
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

// if (typeof response.razorpay_payment_id == 'undefined' || response.razorpay_payment_id < 1) {
//      redirect_url = '/you-owe-money.html';
//     } else { 
//         redirect_url = '/thnx-you-paid.html';
//     }
//     location.href = redirect_url;


function savetoDB(response){
    {
    console.log(response)

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