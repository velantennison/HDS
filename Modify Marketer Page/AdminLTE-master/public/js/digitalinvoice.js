function digitalinvoice()
{
 
   var user_email =  localStorage.getItem("Email_from_login");
   document.getElementById('Marketer_Email').innerHTML = user_email;
   console.log(user_email);
   var playersRef1 = firebase.database().ref("Digital_marketing/");

 playersRef1.orderByChild("MARKETER_EMAIL").equalTo(user_email).on("child_added", function(data) {
    //  ADD Client_address Content Cost Domain GST Grand_Total  Logo MARKETER_EMAIL  Mail Marketer_mobile  Mobile_number Shop_address Video_ad Video_url Zone
       var client_num = data.val().Client_number;
       var plan = data.val().Choosen_plan;
       var c_address = data.val().Client_address;
       var c_mail = data.val().Client_mail;
       var c_name = data.val().Client_name;

       var d_cost = data.val().Domain_cost;
       var d_gst = data.val().Domain_Gst;
       var p_price = data.val().Plan_price;
       var p_number = data.val().project_number;
       var d_name = data.val().select_domain;
       var s_address = data.val().shop_address;
       var date = data.val().Date;
       var Total_1 = data.val().Total;
       
       

       invoice(client_num,plan,c_address,c_mail,c_name,d_cost,d_gst,p_price,p_number,d_name,s_address,date,Total_1);

 
}) 

}
 

function invoice(client_num,plan,c_address,c_mail,c_name,d_cost,d_gst,p_price,p_number,d_name,s_address,date,Total_1)
 { 
     var A1 = client_num;
     var A2 = plan;
     var A3 = c_address;
     var A4 = c_mail;
     var A5 = c_name;
     var A6 = d_cost;
     var A7 = d_gst;
     var A8 = p_price;
     var A9 = p_number;
     var A10 = d_name;
     var A11 = s_address;
     var A12 = date;
     var A13 = Total_1;

   var div1 = document.getElementById('div1');
   div1.className="row";
   var div4 = document.createElement('div');
   var style = document.createElement('style'); 
   var div3 = document.createElement('div');
   
   div3.className = "column";
   div3.id = "Col_1";

   style.innerHTML = ` #div3{ backgroundColor: #99c2ff; border:2px solid black; }  `;
   div3.addEventListener('click',function(){
     alert("hello");
     mtb(A1,A2,A3,A4,A5,A6,A7,A8,A9,A10,A11,A12,A13);
   });

   var cl_name  = document.createElement('p');
   cl_name.id="cname";
  
   var cl_number  = document.createElement('p');
   cl_number.id="cnumber";

   var pro_num = document.createElement('p');
   pro_num.id="project_num";

   var pro_plan   = document.createElement('p');

   var pro_price = document.createElement('p');
   pro_price.id="client_mail";

 cl_name.innerHTML = "Name:" +c_name ;
 cl_number.innerHTML = "Number:" + client_num;
 pro_num.innerHTML = "Project Number:" + p_number;
 pro_plan.innerHTML = "Plan:" + plan;
 pro_price.innerHTML = "Project Price:" + p_price;

   div3.appendChild(cl_name);
   div3.appendChild(cl_number);
   div3.appendChild(pro_num);
   div3.appendChild(style);

   div4.appendChild(pro_price);
     div4.id = "mobile";
   div4.appendChild(pro_plan);
      div3.appendChild(div4);
     var div5 = document.createElement('div');
     div5.id="single_div";
   div5.style.border="1px solid black";
   div5.style.marginLeft="4%";
   div5.appendChild(div3);
   
   div1.appendChild(div5);
}

function mtb(A1,A2,A3,A4,A5,A6,A7,A8,A9,A10,A11,A12,A13){

 var div2 = document.getElementById('invoice_1');
   // div2.style.width="50%";
 // div2.style.height="800px";
 div2.style.backgroundColor = "lightblue";
 
 
 // div2.style.height = "px";

 //1st child div
   var view = document.createElement('div');
 
 view.className = "col-6";
view.style.float = "left";
view.style.marginTop = "5%";
 
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
 var P11 = document.createElement('p');
 var P12 = document.createElement('p');
 var P13 = document.createElement('p');

 var Button_div1_ = document.getElementById('back_btn');
 
 Button_div1_.style.marginLeft = "2%";
 Button_div1_.style.width = "8%";
 Button_div1_.addEventListener('click',function(){
   window.location.reload();
  
     
   });


 
P1.innerHTML ="<b>Client Number:</b>"+' ' + A1;
P2.innerHTML ="<b>Choosen plan:</b>" +' '+ A2;
P3.innerHTML ="<b>Client Address:</b>"+' ' + A3;
P4.innerHTML ="<b>Client  Mail:</b>"+' ' + A4;
P5.innerHTML ="<b>Client Name:</b>" +' '+ A5;
P6.innerHTML ="<b>Domail Cost:</b>" +' ' + A6;
P7.innerHTML ="<b>Domail Gst:</b>" +' ' + A7;
P8.innerHTML ="<b>Plan Price:</b>" +' ' + A8;
P9.innerHTML ="<b>Project Number:</b>" +' ' + A9;
P10.innerHTML="<b>Domain Name:</b>" +' ' + A10;
P11.innerHTML="<b>Shop Address:</b>" +' ' + A11;
P12.innerHTML= "<b>Date:</b>"  +' '+ A12;
P13.innerHTML="<b>Total:</b>" +' ' + A13;

view.appendChild(P1);
view.appendChild(P2);
view.appendChild(P3);
view.appendChild(P4);
view.appendChild(P5);
view.appendChild(P6);
view1.appendChild(P7);
view1.appendChild(P8);
view1.appendChild(P9);
view1.appendChild(P10);
view1.appendChild(P11);
view1.appendChild(P12);
view1.appendChild(P13);
div2.appendChild(view);
div2.appendChild(view1);
}