var ImgUrl;
var Img1Url;
var Vid1;

var files = [];
var files1 = [];
var files3 = []; 
var uploadTask1;
var uploadTask2;
var uploadTask3;
var content_,domain_,phone_,mail_,Add_,Shop_address_,zone_,budget_,gst_1_;
var marketer_mob;
var Digit_pro_num_,currenet_date;
var user_email_fr_lg2;
var link;
var cost_add,cost,video_amount,total_cost,gst_amount;
var IMAGE_COST,VIDEO_COST;


var reader = new FileReader();



document.getElementById("select_").onclick = function(e){
  var input = document.createElement('input');
  input.type = 'file';
input.onchange = e => {
  files = e.target.files;
  reader = new FileReader();
  reader.onload = function() {
      document.getElementById("logo_").src = reader.result;
      

  }
  reader.readAsDataURL(files[0]);
}
input.click();
}

document.getElementById("select1_").onclick = function(e){
    var input1 = document.createElement('input');
    input1.type = 'file';
  input1.onchange = e => {
    files1 = e.target.files;
    reader = new FileReader();
    reader.onload = function() {
        document.getElementById("img_").src = reader.result;
       
    }
    reader.readAsDataURL(files1[0]);
  }
  input1.click();
  }

  document.getElementById("v_select").onclick = function(e){
    var input2 = document.createElement('input');
    input2.type = 'file';
  input2.onchange = e => {
    files3 = e.target.files;
    reader = new FileReader();
    reader.onload = function() {
        document.getElementById("video_1").src = reader.result;
       
    }
    reader.readAsDataURL(files3[0]);
  }
  input2.click();
  }

  // total cost count
  document.getElementById("section_div").addEventListener("keyup", function() {
    // alert("Hello World!"); 
    var A = document.getElementById("cost_").value;
    var B = document.getElementById("v_cost").value;
    var C_ = document.getElementById("budget").value;
    var D_ = document.getElementById("gst1_").value;

    total_cost = parseFloat(A)+parseFloat(B)+parseFloat(C_)+parseFloat(D_);
    console.log(total_cost);
    document.getElementById("total_").value = total_cost;

  });
  document.getElementById("section_div").addEventListener("click", function() {
    // alert("Hello World!"); 
    var A = document.getElementById("cost_").value;
    var B = document.getElementById("v_cost").value;
    var C_ = document.getElementById("budget").value;
    var D_ = document.getElementById("gst1_").value;

    total_cost = parseFloat(A)+parseFloat(B)+parseFloat(C_)+parseFloat(D_);
    console.log(total_cost);
    document.getElementById("total_").value = total_cost;

  });

  // gst calculation
  function gst1(){
    cost = document.getElementById("budget").value;
    
    var gst_amount = cost * 0.18;
    
    document.getElementById("gst1_").value = gst_amount;
}


//video ad
link = "null";
function video_ad(){
  let L= document.getElementsByName("video");
  for( i = 0; i < L.length; i++){
    if(L[i].checked){
      link = L[i].value;
      console.log(link);
    }
   
}
 
}
 // image cost
 function image_cost(){
   let C = document.getElementsByName("Image");
   for(i = 0; i < C.length; i++){
    if(C[i].checked){
      cost_add = C[i].value;
      document.getElementById("cost_").value = cost_add;
      if(cost_add == 0){
        alert("Do you want to add your own Image AD");
        document.getElementById("image1_div").style.display = "block";
        document.getElementById("image_div").style.display = "none";
      
        
      }else if(cost_add == 100){
        alert("Do you want to add Custom Image AD");
        document.getElementById("image_div").style.display = "block";
        document.getElementById("image1_div").style.display = "none";
        
      }
    }
    
}
   
 }
 //video cost
 function video_cost(){
   let D = document.getElementsByName("video_");
   for(i = 0; i < D.length; i++){
     if(D[i].checked){
      video_amount = D[i].value;
      document.getElementById("v_cost").value = video_amount;
      if(video_amount == 0){
        alert("Do you want to add your own video AD");
        document.getElementById("add_video").style.display = "block";
        document.getElementById("video_div").style.display = "none";
      
        
      }else if(video_amount == 1000){
        alert("Do you want to add Custom Video AD");
        document.getElementById("video_div").style.display = "block";
        document.getElementById("add_video").style.display = "none";
        
      }
     }
   }
 }


// add to database digital table
function dataget(){

  setTimeout(function () { 
    
 
uploadTask1.snapshot.ref.getDownloadURL().then(function(url1){
  ImgUrl = url1;
  console.log("q1" + ImgUrl);
  uploadTask3.snapshot.ref.getDownloadURL().then(function(url2){
    Vid1 = url2;
    console.log("q3" + Vid1);

  uploadTask2.snapshot.ref.getDownloadURL().then(function(url3){
    Img1Url = url3;
    console.log("q2" +  Img1Url);

    firebase.database().ref('Digital_marketing/' +  phone_ ).set({
      Logo:  ImgUrl,
      ADD:  Img1Url,
      Content:  content_,
      Domain: domain_,
      Mobile_number: phone_,
      Mail:  mail_,
      Image_cost: IMAGE_COST,
      Video_cost: VIDEO_COST,
      Marketer_mobile: marketer_mob,
      MARKETER_EMAIL: user_email_fr_lg2,
      Client_address: Add_,
      Shop_address:  Shop_address_,
      Video_url: Vid1,
      Video_ad: link, 
      Zone: zone_,
      Cost: budget_,
      GST: gst_1_,
      Grand_Total: grand_total,
      project_number: Digit_pro_num_,
      Date: currenet_date
     
    
    });
    alert("Data Added Successfully");
  });
});
});

},10000);
 
}


function datainsert(){

  // alert("hello darling");
  
   content_ = document.getElementById("content_").value;
   domain_ = document.getElementById("domain").value;
   phone_ = document.getElementById("phonenum_").value;
   mail_ = document.getElementById("mail_").value;
   Add_ = document.getElementById("address1_").value;
   Shop_address_ = document.getElementById("s_address_").value;
   zone_ = document.getElementById("zone").value;
   budget_ = document.getElementById("budget").value;
   gst_1_ = document.getElementById("gst1_").value;
   grand_total = document.getElementById("total_").value
   marketer_mob = localStorage.getItem("MOB");
   user_email_fr_lg2 =  localStorage.getItem("Email_from_login");
   IMAGE_COST = document.getElementById("cost_").value;
   VIDEO_COST = document.getElementById("v_cost").value;
   Digit_pro_num_ = document.getElementById("digit_pro_num").value;
  console.log(domain_);
  

  // console.log(link);


   uploadTask1 = firebase.storage().ref('Digital_marketing/' +  phone_ +".png.1").put(files[0]);
   uploadTask2 = firebase.storage().ref('Digital_marketing/' +  phone_ +".png.2").put(files1[0]);
   uploadTask3 = firebase.storage().ref('Digital_marketing/' +  phone_ +".mp4.3").put(files3[0]);
 
  
  uploadTask1.on('state_changed', function(snapshot)
  {
    //   var progress = (snapshot.bytesTransfered / snapshot.totalBytes) * 100;
    //   document.getElementById('UpProgress').innerHTML = 'upload'+100+'%';

  },
  function(error){
      alert('error in saving image')
  },

  function(){
   
    dataget();
       
   
});


}



// payment process
function paymentProcess(){
  var Payment_ = document.getElementById("total_").value;



var options = {
  "key": "rzp_test_GmJyzKJA6xsOC6", // Enter the Key ID generated from the Dashboard
  "amount":  Payment_ * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 means 50000 paise or ₹500.
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







function savetoDB(response){
  {
  console.log(response)
 
  var name = document.getElementById("phonenum_").value;
  var payRef = firebase.database().ref('payment_for_Digital_Marketing/');
 
  if (typeof response.razorpay_payment_id == 'undefined' || response.razorpay_payment_id < 1) {
      // redirect_url = 'preloadergeeks.html';
      console.log('failed');
     } else { 
      //    redirect_url = 'preloadergeeks.html';
         console.log('success');
         payRef.child(name).set({
         Mobile_number : name,
        payment_id : response.razorpay_payment_id
      })
      datainsert();
     }
}

//    location.href = redirect_url;
}


function myFunction_() {

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
 var day = d.getDate();
 n = month[d.getMonth()];
 year = d.getFullYear();
  currenet_date = day + ' ' + n + ' ' + year;

  currenet_date_ =  n + ' ' + year;
 localStorage.setItem("DATE", currenet_date_);
document.getElementById("demo_").value = currenet_date;
}
