function digitalinvoice()
{
 
   var user_email =  localStorage.getItem("Email_from_login");
   document.getElementById('Marketer_Email').innerHTML = user_email;
   console.log(user_email);
   var playersRef1 = firebase.database().ref("Digital_marketing/");

 playersRef1.orderByChild("MARKETER_EMAIL").equalTo(user_email).on("child_added", function(data) {
    //  ADD  Content  Domain    Logo MARKETER_EMAIL   Marketer_mobile   Shop_address  Video_url Zone   project_number
       var digit_client_num  = data.val().Mobile_number;
       var digit_cost        = data.val().Cost;
       var digit_c_address      = data.val().Client_address;
       var digit_gst            = data.val().GST;
       var digit_grand_total = data.val().Grand_Total;
       var digit_mail        = data.val().Mail;
       var digit_img_cost       = data.val().Image_cost;
       var digit_video_cost     = data.val().Video_cost;
       var digit_p_number       = data.val().project_number;
       var date = data.val().Date;
    //    var digit_s_address = data.val().shop_address;
    //    var digit_date = data.val().Date;
    //    var digit_Total_1 = data.val().Total;
       
       

       digital_invoice(digit_client_num,digit_cost,digit_c_address,digit_gst,digit_grand_total,digit_mail,digit_img_cost,digit_video_cost,digit_p_number,date);

 
}) 

}
 

function digital_invoice(digit_client_num,digit_cost,digit_c_address,digit_gst,digit_grand_total,digit_mail,digit_img_cost,digit_video_cost,digit_p_number,date)
 { 
     var A1 = digit_client_num; 
     var A2 = digit_mail;
     var A3 = digit_c_address;
     var A4 = digit_p_number;
     var A5 = digit_gst;
     var A6 = digit_cost;
     var A7 = digit_img_cost;
     var A8 = digit_video_cost;
     var A9 = digit_grand_total;
     var A10 = date;

   var div1 = document.getElementById('div1');
   div1.className="row";
   var div4 = document.createElement('div');
   var style = document.createElement('style'); 
   var div3 = document.createElement('div');
   
   div3.className = "column";
   div3.id = "Col_1";

   //style.innerHTML = ` #div3{ backgroundColor: #99c2ff; border:2px solid black; }  `;
   div3.addEventListener('click',function(){
     alert("hello");
     mtb(A1,A2,A3,A4,A5,A6,A7,A8,A9,A10);
   });

   var dig_c_num  = document.createElement('p');
   dig_c_num.id="Dig_c_num_";
  
   var dig_mail  = document.createElement('p');
   dig_mail.id="Dig_mail_";

   var dig_pro_no = document.createElement('p');
   dig_pro_no.id="Dig_Pro_no_";

   var dig_grd_total = document.createElement('p');
   dig_grd_total.id="Dig_G_total";
  //  var pro_price = document.createElement('p');
  //  pro_price.id="client_mail";

  dig_c_num.innerHTML = "Client Number:" +digit_client_num ;
  dig_mail.innerHTML = "Mail:" + digit_mail;
  dig_pro_no.innerHTML = "Project Number:" + digit_p_number;
  dig_grd_total.innerHTML = "Grand Total:" + digit_grand_total;
//  pro_price.innerHTML = "Project Price:" + p_price;

   div3.appendChild(dig_c_num);
   div3.appendChild(dig_mail);
  //  div3.appendChild(pro_num);
   div3.appendChild(style);

   div4.appendChild(dig_pro_no);
     div4.id = "mobile";
   div4.appendChild(dig_grd_total);
      div3.appendChild(div4);
      div3.id ="div3";
     var div5 = document.createElement('div');
     div5.id="single_div";
   div5.style.border="1px solid black";
   div5.style.marginLeft="4%";
   div5.appendChild(div3);
   
   div1.appendChild(div5);
}

function mtb(A1,A2,A3,A4,A5,A6,A7,A8,A9,A10){

 var div2 = document.getElementById('invoice_1');
   // div2.style.width="50%";
 // div2.style.height="800px";
 div2.style.backgroundColor = "lightblue";
 
 
 // div2.style.height = "px";

 //1st child div
   var view = document.createElement('div');
 
 view.className = "col-6";
view.style.float = "left";
view.style.marginTop = "10%";
 
 // 2nd child div
   var view1 = document.createElement('div');
 view1.className = "col-6";
 view1.style.float = "right";
view1.style.marginTop = "5%";
 


 document.getElementById('div1').style.display = "none";
 document.getElementById('_invoice').style.display = "block";
 document.getElementById('img_logo').style.display = "block";
 document.getElementById('btn-div').style.display = "block";

 var P1 = document.createElement('p');
 var P2 = document.createElement('p');
 var P3 = document.createElement('p');
 var P4 = document.createElement('p');
 var P5 = document.createElement('p');
 var P6 = document.createElement('p');
 var P7 = document.createElement('p');
 var P8 = document.createElement('p');
 var P9 = document.createElement('p');
 var P10 = document.createElement('p');
//  var P11 = document.createElement('p');
//  var P12 = document.createElement('p');
//  var P13 = document.createElement('p');

 var Button_div1_ = document.getElementById('back_btn');
 
 Button_div1_.style.marginLeft = "2%";
 Button_div1_.style.width = "8%";
 Button_div1_.addEventListener('click',function(){
   window.location.reload();
  
     
   });


 
P1.innerHTML ="<b>Digit Client num:</b>"+' ' + A1;
P2.innerHTML ="<b>Digit mail:</b>" +' '+ A2;
P3.innerHTML ="<b>Digit C Address:</b>"+' ' + A3;
P4.innerHTML ="<b>Digit Project number:</b>"+' ' + A4;
P5.innerHTML ="<b>Digit GST:</b>" +' '+ A5;
P6.innerHTML ="<b>Digit Cost:</b>" +' ' + A6;
P7.innerHTML ="<b>Digit Img Cost:</b>" +' ' + A7;
P8.innerHTML ="<b>Digit Video Cost:</b>" +' ' + A8;
P9.innerHTML ="<b>Digit Grand Total:</b>" +' ' + A9;
P10.innerHTML="<b>Date:</b>" +' ' + A10;
// P11.innerHTML="<b>Shop Address:</b>" +' ' + A11;
// P12.innerHTML= "<b>Date:</b>"  +' '+ A12;
// P13.innerHTML="<b>Total:</b>" +' ' + A13;

view.appendChild(P1);
view.appendChild(P2);
view.appendChild(P3);
view.appendChild(P4);
view1.appendChild(P10);
view1.appendChild(P5);
view1.appendChild(P6);
view1.appendChild(P7);
view1.appendChild(P8);
view1.appendChild(P9);
 
// view1.appendChild(P11);
// view1.appendChild(P12);
// view1.appendChild(P13);
div2.appendChild(view);
div2.appendChild(view1);
}