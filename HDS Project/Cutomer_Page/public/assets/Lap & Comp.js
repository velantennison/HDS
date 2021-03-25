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

 function Lap()
{
    Del();  
 
    var playersRef = firebase.database().ref("Test2/Laptop & Computer/");

    playersRef.orderByChild("Category").equalTo("Laptop & Computer").on("child_added", function(data) {
        let Cate_name_1 = data.val().Category;
        let Brand_name_1 = data.val().Brand_Name;
        let Prod_name_1 = data.val().Product_Name;
        let Desc_1 = data.val().Product_Desc;
        let Feature_1 = data.val().Product_feature;
        let Model_name = data.val().Product_Model_name;
		let Image_main = data.val().Img_url1;

        additemtodiv(Cate_name_1,Brand_name_1,Prod_name_1,Desc_1,Feature_1,Model_name,Image_main);

    });
}
function Del()
{
    document.getElementById('div1').innerHTML = "";
}

function additemtodiv(Cate_name_1,Brand_name_1,Prod_name_1,Desc_1,Feature_1,Model_name,Image_main)
{
    
    var div1 = document.getElementById('div1');
	var div4 = document.createElement('div');
   // var div2 = document.getElementById('div2');
    var style = document.createElement('style');
    var div3 = document.createElement('div');
	var img = document.createElement('img')
    div3.id = "div3_";
    div3.className = "column";
	div4.className = "col-3";
	img.className  = "img_main";
    // div3.style.backgroundColor = "#99c2ff";
    // div3.style.border = "2px solid black";

    style.innerHTML = ` #div3{ backgroundColor: #99c2ff; border:2px solid black; }  `;
	style.innerHTML = ` img{height:100px;width:100px;}`;
    var c_name_p  = document.createElement('h4');
    var b_name_p  = document.createElement('h4');
    var pr_name_p = document.createElement('h4');
    var desc_p    = document.createElement('h4');
    var fat_p     = document.createElement('h4');
    var mod_p     = document.createElement('h4');
	var Img_p    =  document.createElement('img');
    


    c_name_p.innerHTML = Cate_name_1;
    b_name_p.innerHTML = Brand_name_1;
    pr_name_p.innerHTML = Prod_name_1;
    desc_p.innerHTML = Desc_1;
    fat_p.innerHTML = Feature_1;
    mod_p.innerHTML = Model_name;
	Img_p.src = Image_main;
//div1.appendChild(div4);
     div3.appendChild(Img_p);
    div3.appendChild(c_name_p);
    div3.appendChild(b_name_p);
   // div3.appendChild(pr_name_p);
    //div3.appendChild(desc_p);
   // div3.appendChild(fat_p);
    div3.appendChild(mod_p);
    div3.appendChild(style);
	
    div1.appendChild(div3);
    

    
}