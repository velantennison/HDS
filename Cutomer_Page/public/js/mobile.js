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
    Del();  
 
    var playersRef = firebase.database().ref("Test2/Mobiles/");

    playersRef.orderByChild("Category").equalTo("Mobiles").on("child_added", function(data) {
        let Cate_name_1 = data.val().Category;
        let Brand_name_1 = data.val().Brand_Name;
        let Prod_name_1 = data.val().Product_Name;
        let Desc_1 = data.val().Product_Desc;
        let Feature_1 = data.val().Product_feature;
        let Price_Value = data.val().Size_1_Price;
		let Image_main = data.val().Img_url1;
		let Image2_pic = data.val().Img_url2;
		let Image3_pic = data.val().Img_url3;
		let Image4_pic = data.val().Img_url4;

        additemtodiv(Cate_name_1,Brand_name_1,Prod_name_1,Desc_1,Feature_1,Price_Value,Image_main,Image2_pic,Image3_pic,Image4_pic);
		
		
    });
}
function Del()
{
    document.getElementById('div1').innerHTML = "";
}




function P_value(){

var x = document.getElementById("quantity").value;
var y = document.getElementById("Price").innerHTML;


 var sum = x*y;

 console.log(sum);
 return sum;
 }
 
 
 
function additemtodiv(Cate_name_1,Brand_name_1,Prod_name_1,Desc_1,Feature_1,Price_Value,Image_main,Image2_pic,Image3_pic,Image4_pic)
{
    
    var div1 = document.getElementById('div1');
	
	div1.className="row";
	var div4 = document.createElement('div');
   // var div2 = document.getElementById('div2');
    var style = document.createElement('style'); 
    var div3 = document.createElement('div');
	
	
    
	
	
	var x  = Brand_name_1;
	var y = Price_Value;
	var z = Image_main;
	var v = Image2_pic;
	var u = Image3_pic;
	var w = Image4_pic;
	
	div3.addEventListener('click',function(){
		clicked(x,y,z,v,u,w);
	})
    div3.className = "column";
//	div4.className = "column2";
	
    // div3.style.backgroundColor = "#99c2ff";
    // div3.style.border = "2px solid black";
    
    style.innerHTML = ` #div3{ backgroundColor: #99c2ff; border:2px solid black; }  `;
	//style.innerHTML = ` img{height:185px;width:100px;}`;
    var c_name_p  = document.createElement('h4');
    var b_name_p  = document.createElement('h4');
    var pr_name_p = document.createElement('h4');
    var desc_p    = document.createElement('h4');
    var fat_p     = document.createElement('h4');
    var mod_p     = document.createElement('h5');
	var Img_p    =  document.createElement('img');
	Img_p.id="mainimage";
    

    c_name_p.innerHTML = Cate_name_1;
    b_name_p.innerHTML = Brand_name_1;
    pr_name_p.innerHTML = Prod_name_1;
    desc_p.innerHTML = Desc_1;
    fat_p.innerHTML = Feature_1;
    mod_p.innerHTML = Price_Value;
	Img_p.src = Image_main;
//div1.appendChild(div4);
     div3.appendChild(Img_p);
    //div3.appendChild(c_name_p);
    div4.appendChild(b_name_p);
	div4.id = "mobile";
   // div3.appendChild(pr_name_p);
    //div3.appendChild(desc_p);
	
  //  div3.appendChild(fat_p);
    div4.appendChild(mod_p);
    div3.appendChild(style);
	div3.appendChild(div4);
	
    
	var div5 = document.createElement('div');
	div5.className="col-12";
	
	div5.appendChild(div3);
	//div5.appendChild(div4);
	div1.appendChild(div5);

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

	sessionStorage.setItem("BRANDNAME",a1);
   sessionStorage.setItem("PRICE", a2);
	sessionStorage.setItem("MAIN_IMAGE",a3);
	sessionStorage.setItem("IMAGE2_PIC",a4);
	sessionStorage.setItem("IMAGE3_PIC",a5);
	sessionStorage.setItem("IMAGE4_PIC",a6)
	    //sessionStorage.setItem("IMAGE", Prod_img);
		window.open("Product_detail.html");
		return;


}



