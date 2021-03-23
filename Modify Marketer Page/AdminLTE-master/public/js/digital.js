var ImgUrl;
var Img1Url;
var videoUrl;
var files = [];
var files1 = [];
var files2 = [];



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

  //video select
  document.getElementById("v_select").onclick = function(e){
    var input2 = document.createElement('input');
    input2.type = 'file';
  input2.onchange = e => {
    files2 = e.target.files;
    reader = new FileReader();
    reader.onload = function() {
        document.getElementById("video_").src = reader.result;
      

    }
    reader.readAsDataURL(files2[0]);
  }
  input2.click();
  }

  // gst calculation
  function gst1(){
      
    var cost = document.getElementById("budget").value;
    var gst_amount = cost * 0.18;
    document.getElementById("gst1_").value = gst_amount;
}
// display div when click the click here button
document.getElementById("click_").onclick = function(){
  alert("welcome");
  document.getElementById("add_video").style.display = "block";

  document.getElementById("video_div").style.display = "block";
  document.getElementById("zone_div").style.display = "block";
  document.getElementById("cost_div").style.display = "block";


}

// add to database digital table

document.getElementById("digital_payment").onclick = function() {

  // alert("hello darling");

  var content_ = document.getElementById("content_").value;
  var domain_ = document.getElementById("domain").value;
  var phone_ = document.getElementById("phonenum_").value;
  var mail_ = document.getElementById("mail_").value;
  var Add_ = document.getElementById("address1_").value;
  var Shop_address_ = document.getElementById("s_address_").value;
  var zone_ = document.getElementById("zone").value;
  var budget_ = document.getElementById("budget").value;
  var gst_1_ = document.getElementById("gst1_").value;

  console.log(domain_);

  var uploadTask1 = firebase.storage().ref('Digital_marketing/' +  phone_ +".png.1").put(files[0]);
  var uploadTask2 = firebase.storage().ref('Digital_marketing/' +  phone_ +".png.2").put(files1[0]);
  var uploadTask3 = firebase.storage().ref('Digital_marketing/' +  phone_ +".mp4.1").put(files2[0]);
  uploadTask.on('state_changed', function(snapshot)
  {
    //   var progress = (snapshot.bytesTransfered / snapshot.totalBytes) * 100;
    //   document.getElementById('UpProgress').innerHTML = 'upload'+100+'%';

  },
  function(error){
      alert('error in saving image')
  },

  function(){
      uploadTask.snapshot.ref.getDownloadURL().then(function(url1){
        ImgUrl = url1;
     
        uploadTask.snapshot.ref.getDownloadURL().then(function(url2){
          Img1Url = url2;

      
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
