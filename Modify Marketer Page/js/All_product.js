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
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function Projects_show()

{
    var x = localStorage.getItem("NAME");
    console.log("veni" + x);
    document.getElementById("Marketer_Email").innerHTML = x;

	
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
		 n = month[d.getMonth()];
		 year = d.getFullYear();
		 current_month =  n + ' ' + year;
		// alert(current_month);
	 
    // Del();  
 
	
    var playersRef = firebase.database().ref("Projects/");

    playersRef.orderByChild("month_and_year").equalTo(current_month).on("child_added", function(data) {
        let Project_domain = data.val().select_domain;
        let Project_description = data.val().Project_description;
        let Project_date = data.val().month_and_year;
        let Client_name = data.val().Client_name;
        let Client_mob = data.val().Client_number;
		let Client_mail = data.val().Client_mail;
       
		

        additemtodiv(Project_domain,Project_description,Project_date,Client_name,Client_mob,Client_mail);
		// alert(Client_name);
		
    });
}



 
 
function additemtodiv(Project_domain,Project_description,Project_date,Client_name,Client_mob,Client_mail)
{
    
    var div1 = document.getElementById('div1');
	
	div1.className="row";
	var div4 = document.createElement('div');
   // var div2 = document.getElementById('div2');
    var style = document.createElement('style'); 
    var div3 = document.createElement('div');
	
	
    
	

    div3.className = "column";
//	div4.className = "column2";
	
    // div3.style.backgroundColor = "#99c2ff";
    // div3.style.border = "2px solid black";
    
    style.innerHTML = ` #div3{ backgroundColor: #99c2ff; border:2px solid black; }  `;
	//style.innerHTML = ` img{height:185px;width:100px;}`;
    var c_name_p  = document.createElement('p');
    c_name_p.id="domain_";
   
    var b_name_p  = document.createElement('p');
    b_name_p.id="project_desc";
    var pr_name_p = document.createElement('p');
    pr_name_p.id="project_date";
    var desc_p    = document.createElement('p');
    var fat_p     = document.createElement('p');
	
    var mod_p     = document.createElement('p');
    mod_p.id="client_mail";
	// var Img_p    =  document.createElement('img');
	// Img_p.id="mainimage";
    

    c_name_p.innerHTML = Project_domain;
    b_name_p.innerHTML = Project_description;
    pr_name_p.innerHTML = Project_date;
    desc_p.innerHTML = Client_name;
    fat_p.innerHTML = Client_mob;
    mod_p.innerHTML = Client_mail;
	
	// Img_p.src = Image_main;
//div1.appendChild(div4);
    //  div3.appendChild(Img_p);
    div3.appendChild(c_name_p);
    div4.appendChild(b_name_p);
	div4.id = "mobile";
   div3.appendChild(pr_name_p);
    //div3.appendChild(desc_p);
	
    div3.appendChild(fat_p);
    div4.appendChild(mod_p);
    div3.appendChild(style);
	div3.appendChild(div4);
	
    
	var div5 = document.createElement('div');
	div5.className="col-3";
    div5.style.border="1px solid black";
    div5.style.marginLeft="4%";
	
	div5.appendChild(div3);
	//div5.appendChild(div4);
	div1.appendChild(div5);

   
		

    
}




