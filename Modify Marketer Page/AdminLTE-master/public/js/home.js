//start of customer count
var count1,count;
function fetch(){

// fetching marketer id
    var user_email =  localStorage.getItem("Email_from_login");
    document.getElementById('Marketer_Email').innerHTML = user_email;

	var playersRef = firebase.database().ref("Project1/Marketer/");

    playersRef.orderByChild("Email").equalTo(user_email).on("child_added", function(data) {
   
        
        
        var Marketer_Mobile_Profile = data.val().Mobile_Number;
        var Marketer_ID = data.val().Roll_number;

        localStorage.setItem("Marketer_mobile", Marketer_Mobile_Profile);
        localStorage.setItem("Marketer_Id", Marketer_ID);
   

    })




    $(document).ready(function () { 
        setTimeout(function () { 
          //alert('Reloading Page'); 
          addMonthSal();
        }, 9000); 
      }); 
    // month wise report
    

	
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
 
	var marketer_mob = localStorage.getItem("MOB");

    var playersRef = firebase.database().ref("Marketors_Projects/");

    playersRef.orderByChild("Marketer_mobile").equalTo(marketer_mob).on("child_added", function(data) {
        
       
        let Project_domain = data.val().select_domain;
        let Project_description = data.val().Project_description;
        let Project_date = data.val().month_and_year;
        let Client_name = data.val().Client_name;
        let Client_mob = data.val().Client_number;
		let Client_mail = data.val().Client_mail;
       
		
        if (Project_date == current_month){
        additemtodiv(Project_domain,Project_description,Project_date,Client_name,Client_mob,Client_mail);
		// alert(Client_name);
    }
     
		
    });
    var marketer_mob1 = localStorage.getItem("MOB");
    console.log("12" + marketer_mob1);
    //var table = new Firebase('https://hyper-mart-shopping-default-rtdb.firebaseio.com/1%20year');
    var playersRef1 =  firebase.database().ref('Marketors_Projects/');
    var child1 = playersRef1.orderByChild("Marketer_mobile").equalTo(marketer_mob1);
    // var Uid = localStorage.getItem('userNAME');
    //  send_value(Uid);
    
    child1.on('value', function(snapshot) {
        // var x1 = snapshot.val().email;
        // alert(x1);
      count = 0;
       snapshot.forEach(function() {
           count++;  
       
       });
       console.log(count);
       //count is now safe to use.
    });
    

    var playersRef2 =  firebase.database().ref('Digital_marketing/');
    var child2 = playersRef2.orderByChild("Marketer_mobile").equalTo(marketer_mob1);
    // var Uid = localStorage.getItem('userNAME');
    //  send_value(Uid);
    
    child2.on('value', function(snapshot) {
        // var x1 = snapshot.val().email;
        // alert(x1);
        count1 = 0;
       snapshot.forEach(function() {
           count1++;  
           
       
       });
       console.log("digital count"+ count1);
       document.getElementById("digit_count").innerHTML = count1;
       ready(count);
       //count is now safe to use.
    });

    console.log("hello");
    // var playersref = firebase.database().ref('Projects/')
    // playersref.orderByChild("Client_number").equalTo("9751059000").on('value', function(data) {
      var playersRef = firebase.database().ref("Projects/");
  playersRef.orderByChild("Client_number").equalTo("9751059000").on("child_added", function(data) {
              
   // let CUSTOMER_name_ = data.val().CUSTOMER_NAME;
       var x1=data.val().month_and_year;

        console.log(x1); 
    })

    }
    function ready(count){
        document.getElementById("complted_tasks").innerHTML = count + "/50";
        var D_count = document.getElementById("digit_count").innerHTML;
        console.log("ready" + D_count);
        if(count){
         salary = (count * 350) + (D_count * 100);
        // alert(salary);
         document.getElementById("salary").innerHTML = salary;
        }
        // else if( (count > 30) && (count <= 40)  ){
        //   salary = (count * 345) + (D_count * 100);
        //   document.getElementById("salary").innerHTML = salary;
        // }
        // else if((count > 40) && (count <= 50)  ){
        //   salary = (count * 350)  + (D_count * 100);
        //   document.getElementById("salary").innerHTML = salary ;
        // }
        // document.getElementById("order_count").innerHTML = count1;
      
    
    }
    // end of customer count

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
	div5.id="Single_div";
    div5.style.marginTop="2%";
    div5.style.border="1px solid black";
    div5.style.marginLeft="4%";
	
	div5.appendChild(div3);
	//div5.appendChild(div4);
	div1.appendChild(div5);

   
    
 
}

function addMonthSal()
{ 
    var Markter_ID = localStorage.getItem("Marketer_Id");

    var s1 = document.getElementById("complted_tasks").innerHTML;
    var s2 = s1.split('/');
    var completed_task = s2[0];
    var total_task = s2[1];
    var incomplete_task = total_task-completed_task;

    // console.log("veeraempire" + incomplete_task);
    var user_email_for_sal =  localStorage.getItem("Email_from_login");
    var c_sal = document.getElementById('salary').innerHTML;

    
    firebase.database().ref('MonthlySalary/' + Markter_ID  ).set({
        Marketer_EMAIL: user_email_for_sal,
        Total_Task: total_task,
        Task_Completed: completed_task,
        Task_Incompleted: incomplete_task,
        Salary:c_sal,
       Roll_number:Markter_ID
    });
}