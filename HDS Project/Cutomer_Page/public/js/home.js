var firebaseConfig = {
    apiKey: "AIzaSyBHMZB5nJXtm3UAnVACsxR-LXyK8KtVdno",
    authDomain: "hyper-mart-shopping.firebaseapp.com",
    databaseURL: "https://hyper-mart-shopping-default-rtdb.firebaseio.com",
    projectId: "hyper-mart-shopping",
    storageBucket: "hyper-mart-shopping.appspot.com",
    messagingSenderId: "306358878756",
    appId: "1:306358878756:web:9de20019ab10ca65998eb1",
    measurementId: "G-8FNG928M5F"
};

firebase.initializeApp(firebaseConfig);

function Mobiles()
{
     var playersRef = firebase.database().ref("Banner/");

    playersRef.orderByChild("Mobile").equalTo("9876543210").on("child_added", function(data) {
       
		let Image_main = data.val().Img1;
		let Image2_pic = data.val().Img2;
		let Image3_pic = data.val().Img3;
		let Image4_pic = data.val().Img4;

        additemtodiv(Image_main,Image2_pic,Image3_pic,Image4_pic);
		

    });
	

	function2();
   
}

function function2(){
	
		  var playersRef1 = firebase.database().ref("Test2/Fashion");

    playersRef1.orderByChild("Category").equalTo("Fashion").on("child_added", function(data) {
       
		let Brand_name_1 = data.val().Brand_Name;
        //let Prod_name_1 = data.val().Product_Name;
      //  let Desc_1 = data.val().Product_Desc;
      //  let Feature_1 = data.val().Product_feature;
        let Price_Value = data.val().Size_1_Price;
		let Image_main1 = data.val().Img_url1;
	   console.log("img " + Price_Value );

        additemtodiv2(Brand_name_1,Price_Value,Image_main1);

    });
	
}

function additemtodiv(Image_main,Image2_pic,Image3_pic,Image4_pic)
{
    

	
	var banner = document.getElementById("banner1");
	banner.src= Image_main;
	var banner2 = document.getElementById("banner2");
	  banner2.src= Image2_pic;
	var banner3 = document.getElementById("banner3");
	banner3.src= Image3_pic;
	var banner4 = document.getElementById("banner4");
	banner4.src= Image4_pic;
	
	
	

		

    
}
function additemtodiv2(Brand_name_1,Price_Value,Image_main1){
	
	
		var div1=document.getElementById("div1_");
	div1.style.height="250px";
	div1.style.width="100%";
	div1.style.backgroundColor="red";
	
	var brand_name = document.createElement("p");
	var price = document.createElement("p");
	var img = document.createElement("img");
	img.style.height="20px";
	img.style.width = "59px";
	
	
	brand_name.innerHTML = Brand_name_1;
	price.innerHTML = Price_Value;
	img.src = Image_main1;
	
	
	var div2=document.createElement("div");
	div2.style.width="50%";
	div2.style.float="left";
	div2.style.height="250px";
	div2.style.backgroundColor="yellow";
	
	div2.appendChild(img);
	div2.appendChild(price);
	div2.appendChild(brand_name);
	var div3=document.createElement("div");
	div3.style.width="50%";
	div3.style.float="right";
	div3.style.height="250px";
	div3.style.backgroundColor="blue";
	
	
	div1.appendChild(div2);
	div1.appendChild(div3);
	
	 document.getElementById("foot").style.display="block";
	document.getElementById("footer").style.display="block";

}




 
 
function clicked(n1,n2,n3,n4,n5,n6){
	
	
	//window.location.href="Product_detail.html";
	var a1 = n1;
	var a2 = n2;
	var a3 = n3;
	var a4 = n4;
	var a5 = n5;
	var a6 = n6;

	
	sessionStorage.setItem("MAIN_IMAGE",a3);
	
	    //sessionStorage.setItem("IMAGE", Prod_img);
		window.open("Product_detail.html");
		return;


}

       

