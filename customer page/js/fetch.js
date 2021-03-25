var config = {
    apiKey: "AIzaSyBHMZB5nJXtm3UAnVACsxR-LXyK8KtVdno",
    authDomain: "hyper-mart-shopping.firebaseapp.com",
    databaseURL: "https://hyper-mart-shopping-default-rtdb.firebaseio.com",
    projectId: "hyper-mart-shopping",
    storageBucket: "hyper-mart-shopping.appspot.com",
    messagingSenderId: "306358878756",
    appId: "1:306358878756:web:9de20019ab10ca65998eb1",
    measurementId: "G-8FNG928M5F"
};
firebase.initializeApp(config);
 
 var stdNo=0;
var playersRef = firebase.database().ref("Test2/Fashion/");
playersRef.orderByChild("Shop_ID").equalTo("27137-412-tenkasi-tam").on("child_added", function(data) {
      var header = document.createElement('h2');
	  
	      header.innerHTML = 'name_val-' +(++stdNo);
     var name_val = data.val().Brand_Name;
	 var Prod_img = data.val().Img_url1;
     var id_val = data.val().Product_Fees;
	 var Price1 = data.val().Size_1_Price;
	 var Description = data.val().Product_feature;
	 console.log(Prod_img);
     $("#id12").append(name_val);
      $("#id1").append(id_val);
	  $("#Price").append(Price1);
	  //$("#img").append(Prod_img);
	  
	  document.getElementById("img").src=Prod_img;
	  sessionStorage.setItem("PRICE",Price1);
      sessionStorage.setItem("NAME", name_val);
	  sessionStorage.setItem("IMAGE", Prod_img);
	  sessionStorage.setItem("DESCRIPTION", Description);
      return;
	
	 
	}
); 
  var playersRef2 = firebase.database().ref("Test2/Fashion/");
playersRef2.orderByChild("Shop_ID").equalTo("27137-412-tenkasi-tam").on("child_added", function(data) {
      var header = document.createElement('h2');
	  
	      header.innerHTML = 'name_val-' +(++stdNo);
     var name_val = data.val().Brand_Name;
	 var Prod_img = data.val().Img_url1;
     var id_val = data.val().Product_Fees;
	 var Price = data.val().Size_1_Price;
	 console.log(Prod_img);
     $("#id13").append(name_val);
      $("#id12").append(id_val);
	  $("#Price1").append(Price);
	  //$("#img").append(Prod_img);
	  document.getElementById("img1").src=Prod_img;

  }); 
