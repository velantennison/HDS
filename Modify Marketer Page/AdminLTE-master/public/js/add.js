// var files = [];
// // var reader = new FileReader();
// document.getElementById("select1").onclick = function(e){
//     var input = document.createElement('input');
//     input.type = 'file';
// input.onchange = e => {
//     files = e.target.files;
//     var reader = new FileReader();
//     reader.onload = function()
//     {
//         document.getElementById("myimg").src = reader.result;
//     }
//     reader.readAsDataURL(files[0]);
// }
//  input.click();
// } 

// function datainsert() {
   
//     var Client_name_ = document.getElementById("client_name1").value;
//     var Project_color_ = document.getElementById("color").value;
//     var Project_Number_ = document.getElementById("prod_num").value;
//     var Project_description_ = document.getElementById("description").value;
//     var Client_number_ = document.getElementById("phonenum").value;
//     var Client_mail_ = document.getElementById("mail").value;
//     var Plan_ = document.getElementById("cur_plan").value;
//     var budget_price= document.getElementById("Plan_price").value;
//     var domain_price= document.getElementById("domain_cost").value;
//     var shop_address_ = document.getElementById("shop_address_").value;
//     var Client_address_ = document.getElementById("address_").value;
//     var month_and_year_ = document.getElementById("demo").value;
//     var select_domain_ = document.getElementById("domain_").value;
//     var marketer_mob = localStorage.getItem("MOB");
//     console.log(Project_Number_);

// var uploadTask = firebase.storage().ref('Projects/' + month_and_year_ + Client_number_ + ".png").put(files[0]);
// uploadTask.on('state_changed', function(snapshot)
//       {
//           var progress = (snapshot.bytesTransfered / snapshot.totalBytes) * 100;
//          document.getElementById('UpProgress').innerHTML = 'upload : '+progress+'%';

//       }, 
//       function(){
//         uploadTask.snapshot.ref.getDownloadURL().then(function(url){
//             var ImgUrl = url;

  
  
// firebase.database().ref('Projects/' + month_and_year_ + Client_number_).set({
//     Logo: ImgUrl,
//     Client_name:Client_name_,
//     Design_color: Project_color_,
//     project_number: Project_Number_,
//     Client_mail:Client_mail_,
//     Domain_cost:domain_price,
//     Client_number:Client_number_,
//     shop_address:shop_address_,
//     Client_address:Client_address_,
//     Project_description:Project_description_,
//     select_domain:select_domain_,
//     month_and_year:month_and_year_,
//     Choosen_plan: Plan_,
//     Plan_price: budget_price,
//     Marketer_mobile:marketer_mob,
//     MARKETER_EMAIL: user_email_fr_lg2


    
// });
// alert("Project added successfully");
// });
// });
// }


    var ImgUrl;
    var files = [] ;
   
    var reader = new FileReader();
    
  

  document.getElementById("select1").onclick = function(e){
      var input = document.createElement('input');
      input.type = 'file';
  input.onchange = e => {
      files = e.target.files;
      reader = new FileReader();
      reader.onload = function() {
          document.getElementById("myimg").src = reader.result;
      }
      reader.readAsDataURL(files[0]);
  }
   input.click();
  } 



  function datainsert(){
    var Client_name_ = document.getElementById("client_name1").value;
    var Project_color_ = document.getElementById("color").value;
    var Project_Number_ = document.getElementById("prod_num").value;
    var Project_description_ = document.getElementById("description").value;
    var Client_number_ = document.getElementById("phonenum").value;
    var Client_mail_ = document.getElementById("mail").value;
    var Plan_ = document.getElementById("cur_plan").value;
    var budget_price= document.getElementById("Plan_price").value;
    var domain_price= document.getElementById("domain_cost").value;
    var shop_address_ = document.getElementById("shop_address_").value;
    var gst_ = document.getElementById("GST_").value;

    var Client_address_ = document.getElementById("address_").value;
    var month_and_year_ = document.getElementById("demo").value;
    var select_domain_ = document.getElementById("domain_").value;
    var marketer_mob = localStorage.getItem("MOB");
    console.log(Project_Number_);
      var uploadTask = firebase.storage().ref('Projects1/' + month_and_year_ + Client_number_ +".png").put(files[0]);
  
      uploadTask.on('state_changed', function(snapshot)
      {
        //   var progress = (snapshot.bytesTransfered / snapshot.totalBytes) * 100;
        //   document.getElementById('UpProgress').innerHTML = 'upload'+100+'%';

      },
      function(error){
          alert('error in saving image')
      },

      function(){
          uploadTask.snapshot.ref.getDownloadURL().then(function(url){
            ImgUrl = url;
         
        
    
          
          firebase.database().ref('Projects1/' + month_and_year_ + Client_number_).set({
                    Logo: ImgUrl,
                    Client_name:Client_name_,
                    Design_color: Project_color_,
                    project_number: Project_Number_,
                    Client_mail:Client_mail_,
                    Domain_cost:domain_price,
                    Client_number:Client_number_,
                    shop_address:shop_address_,
                    GST: gst_,
                    Client_address:Client_address_,
                    Project_description:Project_description_,
                    select_domain:select_domain_,
                    month_and_year:month_and_year_,
                    Choosen_plan: Plan_,
                    Plan_price: budget_price,
                    Marketer_mobile:marketer_mob,
                    MARKETER_EMAIL: user_email_fr_lg2
            });
          alert("Image Added Successfully");
      }

    );
},
);

  }