
function oncreate_(){
   
        var playersRef = firebase.database().ref("Vacancy/");
     
           playersRef.on('value',getReq);
           function getReq(snap){
            var array = [];
               snap.forEach(keyReq => { 
                   var total = keyReq.val().Number_of_vacancy;
                   var array_val = parseInt(total);
                   array.push(array_val);
                   console.log(array);
                    var sum = 0;
                   for(var i in array){
                        
                       sum += array[i];
                                         
                   }
                   console.log(sum);
                   document.getElementById("vacancy_total").innerHTML = sum;
                });
           }
    
        var child =  firebase.database().ref('Marketers_Profile/Web Developer/');
        
        child.on('value', function(snapshot) {
           var web_dev_count = 0;
           snapshot.forEach(function() {
            web_dev_count++;
               
               document.getElementById("web_staff").innerHTML = web_dev_count;
           
           });
           console.log(web_dev_count);
           //count is now safe to use.
        });

        //app developer count 
        var child1 =  firebase.database().ref('Marketers_Profile/App Developer/');
        
        child1.on('value', function(snapshot) {
           var app_dev_count = 0;
           snapshot.forEach(function() {
            app_dev_count++;
              
               document.getElementById("app_staff").innerHTML = app_dev_count;
              
           });
            console.log(app_dev_count);
           //count is now safe to use.
        });

           //marketer count 
           var child2 =  firebase.database().ref('Marketers_Profile/Marketer/');
        
           child2.on('value', function(snapshot) {
              var mar_dev_count = 0;
              snapshot.forEach(function() {
               mar_dev_count++;
                  
                  document.getElementById("marketer_staff").innerHTML = mar_dev_count;
               
              });
              console.log(mar_dev_count);
              Total();   
              //count is now safe to use.
           });
                  
     
}
window.addEventListener('load', () => {

   
   
    const name = localStorage.getItem('NAME');
    const surname = localStorage.getItem('SURNAME');
    
    document.getElementById('result-name').innerHTML = name;
    
  
 
 
 })
 document.getElementById("logout1").onclick = function()
 {
    localStorage.clear();
      firebase.auth().signOut().then(() => {
      
      test();
        }).catch((error) => {
      
      });
      
      
 }
  
 function test()
 {
  
  window.location.href = 'index.html';
  localStorage.clear();
 }
 
                
 function search_items() {
                     let input = document.getElementById('staff_search').value;
                     input=input.toLowerCase();
                     let x = document.getElementsByClassName('staff_class');
      
                     for (i = 0; i < x.length; i++) {  
                       if (!x[i].innerHTML.toLowerCase().includes(input)) {
                         x[i].style.display="none";
                       }
                     else {
                         x[i].style.display="block";                  
                     }
                     }
                     } 
 
function Total() {
     var  web_count_ =parseInt(document.getElementById("web_staff").innerHTML);
     var  app_count_ = parseInt(document.getElementById("app_staff").innerHTML);
     var  mar_count_ = parseInt(document.getElementById("marketer_staff").innerHTML);

     var staff_total = web_count_ + app_count_ + mar_count_;
     console.log(staff_total);
     document.getElementById("total_staff").innerHTML = staff_total;
     localStorage.setItem("STAFF",staff_total);
}


function Empty(){
    $("#main_div").empty();
}
document.getElementById("web_dev").onclick = function () {
 
    document.getElementById("web_dev").style.backgroundColor = "#0b6c7b";
    document.getElementById("web_").style.color = "white";
    document.getElementById("app_dev").style.backgroundColor = "#2595af";
    document.getElementById("app_").style.color = "#212529";
    document.getElementById("mar_dev").style.backgroundColor = "#2595af";
    document.getElementById("mar_").style.color = "#212529";
    Empty();
    firebase.database().ref().child('Marketers_Profile/Web Developer/').on('value', function(snapshot) {
        snapshot.forEach(
            function(ChilSnapshot) {
                                 
                let Name = ChilSnapshot.val().Candidate_name;
                 let Position = ChilSnapshot.val().Position;
                 let Roll_ = ChilSnapshot.val().Roll_number;
                 let Status_ = ChilSnapshot.val().Status;
                 let pass1_ = ChilSnapshot.val().Password;
                 let qualification1_ = ChilSnapshot.val().Qualification;
                 let dob_1 = ChilSnapshot.val().DOB;
                 let mobile_no = ChilSnapshot.val().Mobile_Number;
                 let address_1 = ChilSnapshot.val().Address;
                 let country1_ = ChilSnapshot.val().Country;
                 let district_ = ChilSnapshot.val().District;
                 let aadhar_no = ChilSnapshot.val().Aadhar_number;
                 let account_1 = ChilSnapshot.val().Bank_account_number;
                 let ifsc_ = ChilSnapshot.val().IFSC_number;
                 let Email_1 = ChilSnapshot.val().Email;
                addItemsToList(Name, Position, Roll_,pass1_,qualification1_,dob_1,mobile_no,address_1,country1_,district_,aadhar_no,account_1,ifsc_,Email_1,Status_);
            }
        )
    });
console.log("value fetched")
}
document.getElementById("app_dev").onclick = function() {
    document.getElementById("web_dev").style.backgroundColor = "#2595af";
    document.getElementById("web_").style.color = "#212529";
    document.getElementById("app_dev").style.backgroundColor = "#0b6c7b";
    document.getElementById("app_").style.color = "white";
    document.getElementById("mar_dev").style.backgroundColor = "#2595af";
    document.getElementById("mar_").style.color = "#212529";
    Empty();
    // console.log("hello  kowsi kutty");
    firebase.database().ref().child('Marketers_Profile/App Developer/').on('value', function(snapshot) {
        snapshot.forEach(
            function(ChilSnapshot) {
                                 
                let Name = ChilSnapshot.val().Candidate_name;
                 let Position = ChilSnapshot.val().Position;
                 let Roll_ = ChilSnapshot.val().Roll_number;
                 let Status_ = ChilSnapshot.val().Status;
                 let pass1_ = ChilSnapshot.val().Password;
                 let qualification1_ = ChilSnapshot.val().Qualification;
                 let dob_1 = ChilSnapshot.val().DOB;
                 let mobile_no = ChilSnapshot.val().Mobile_Number;
                 let address_1 = ChilSnapshot.val().Address;
                 let country1_ = ChilSnapshot.val().Country;
                 let district_ = ChilSnapshot.val().District;
                 let aadhar_no = ChilSnapshot.val().Aadhar_number;
                 let account_1 = ChilSnapshot.val().Bank_account_number;
                 let ifsc_ = ChilSnapshot.val().IFSC_number;
                 let Email_1 = ChilSnapshot.val().Email;
                addItemsToList(Name, Position, Roll_,pass1_,qualification1_,dob_1,mobile_no,address_1,country1_,district_,aadhar_no,account_1,ifsc_,Email_1,Status_);
            }
        )
    });
console.log("value fetched")

}
document.getElementById("mar_dev").onclick = function () {
    alert("loosu veni");
        document.getElementById("web_dev").style.backgroundColor = "#2595af";
        document.getElementById("web_").style.color = "#212529";
        document.getElementById("app_dev").style.backgroundColor = "#2595af";
        document.getElementById("app_").style.color = "#212529";
        document.getElementById("mar_dev").style.backgroundColor = "#0b6c7b";
        document.getElementById("mar_").style.color = "white";
        Empty();
        //fetch salary details from MONTHLY SALARY TABLE
            firebase.database().ref().child('Marketers_Profile/Marketer/').on('value', function(snapshot) {
          
            snapshot.forEach(
                function(ChilSnapshot) {
                           
                    let Name = ChilSnapshot.val().Candidate_name;
                    let Position = ChilSnapshot.val().Position;
                    let Roll_ = ChilSnapshot.val().Roll_number;
                    let Status_ = ChilSnapshot.val().Status;
                    let pass1_ = ChilSnapshot.val().Password;
                    let qualification1_ = ChilSnapshot.val().Qualification;
                    let dob_1 = ChilSnapshot.val().DOB;
                    let mobile_no = ChilSnapshot.val().Mobile_Number;
                    let address_1 = ChilSnapshot.val().Address;
                    let country1_ = ChilSnapshot.val().Country;
                    let district_ = ChilSnapshot.val().District;
                    let aadhar_no = ChilSnapshot.val().Aadhar_number;
                    let account_1 = ChilSnapshot.val().Bank_account_number;
                    let ifsc_ = ChilSnapshot.val().IFSC_number;
                    let Email_1 = ChilSnapshot.val().Email;
                    addItemsToList2(Name, Position, Roll_,pass1_,qualification1_,dob_1,mobile_no,address_1,country1_,district_,aadhar_no,account_1,ifsc_,Email_1,Status_);
                 
                }
            )
        });
        function  addItemsToList2(Name, Position, Roll_,pass1_,qualification1_,dob_1,mobile_no,address_1,country1_,district_,aadhar_no,account_1,ifsc_,Email_1,Status_){
            var name1_= Name ;
            var position_= Position ;
            var roll1_= Roll_ ;
            var status1_= Status_;
            var pass_= pass1_;
            var qualification_= qualification1_;
            var DOB1_= dob_1;
            var mob1_= mobile_no;
            var address_1_= address_1;
            var country_1_= country1_;
            var district_1_= district_;
            var aadhar_1_= aadhar_no;
            var account_1_= account_1;
            var ifsc_1_= ifsc_;
            var email_1_= Email_1;
            console.log(roll1_);
            
            var fetch_1 = firebase.database().ref().child('MonthlySalary/');
fetch_1.orderByChild("Roll_number").equalTo(roll1_).on('child_added', function(data) {
    let Roll_number_ = data.val().Roll_number;
   
    let Salary = data.val().Salary;
    let task_complete_ = data.val().Task_Completed;
    let task_incomplete_ = data.val().Task_Incompleted;
    // let Roll_number_ = data.val().Roll_number;
    addItemsToList(name1_, position_, roll1_,pass_,qualification_,DOB1_,mob1_,address_1_,country_1_,district_1_,aadhar_1_,account_1_,ifsc_1_,email_1_,status1_,task_complete_,task_incomplete_,Salary);
}       
    )
        }
}

    
   function  addItemsToList(Name, Position, Roll_,pass1_,qualification1_,dob_1,mobile_no,address_1,country1_,district_,aadhar_no,account_1,ifsc_,Email_1,Status_,task_complete1,task_incomplete1,salary_){
  
    var maindiv = document.getElementById("main_div"); 
    var rapper = document.createElement('div');
    rapper.id = "staff_";
    rapper.className = "staff_class";
    var contact = document.createElement("div");
    contact.id = "contact_div";
    
    var roll = document.createElement("div"); 
    roll.id = "roll_div";
   
    var pos = document.createElement("div"); 
    pos.id = "pos_div";
   
    var details = document.createElement("div"); 
    details.id = "detail_div";
   
    var Acc = document.createElement("div");
    Acc.id = "Acc_div"; 
  
    var status = document.createElement("div"); 
    status.id = "status_div";
   
    var completed = document.createElement("div");
    completed.id = "completed_div"; 
   
    var incompleted = document.createElement("div");
    incompleted.id = "incompleted_div"; 

    var salary = document.createElement("div");
    salary.id = "salary_div"; 
  
    var button = document.createElement("div");
    button.id="button_div";
  

    var p1 = document.createElement("p"); 
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    var p5 = document.createElement("p");
    var p6 = document.createElement("p");
    var p7 = document.createElement("p");
    var p8 = document.createElement("p"); 
    var p9 = document.createElement("p");
    var p10 = document.createElement("p");
    var p11 = document.createElement("p");
    var p12 = document.createElement("p");
    var p15 = document.createElement("p");
    var p16 = document.createElement("p");
    var p17 = document.createElement("p");

    var Edit_BTN = document.createElement("button");
    Edit_BTN.innerHTML = "Edit";
    Edit_BTN.id="Edit_1";
    var Block_BTN = document.createElement("button");
    Block_BTN.innerHTML = "Block";
    Block_BTN.id="Block_1";
      p1.innerHTML= "Name:"+Name;
      p2.innerHTML= "Num"+mobile_no;
      p3.innerHTML=Email_1;

      p4 .innerHTML= Roll_;

      p5 .innerHTML=  Position;

      p6 .innerHTML= Status_;

        p7 .innerHTML= address_1;
        p8 .innerHTML= district_;
        p9 .innerHTML= country1_;

        p10 .innerHTML= aadhar_no;
        p11 .innerHTML= account_1;
        p12 .innerHTML= ifsc_;

     p15.innerHTML = task_complete1;

     p16.innerHTML = task_incomplete1;

     p17.innerHTML=salary_;

    var a1=Name ;
    var a2= mobile_no;
    var a3=Email_1;
    var a4=Roll_;
    var a5=Position;
    var a6=Status_;
    var a7=address_1;
    var a8=district_ ;
    var a9= country1_;
    var a10=aadhar_no;
    var a11=account_1;
    var a12=ifsc_;
    
    var a13 = task_complete1;
    var a14 = task_incomplete1;
    var a15 = salary_


    var a16 = pass1_;
    var a17 = qualification1_;
    var a18 = dob_1;
 console.log(a1);
 console.log(a5);

 Edit_BTN.addEventListener('click',function(){
     add(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18);
 });
 Block_BTN.addEventListener('click',function(){
    block(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18);
    
});
if((a5 == "App Developer") || (a5 == "Web Developer")){
    rapper.id = "staff_1";
    contact.id = "contact_div1";
    roll.id = "roll_div1";
    pos.id = "pos_div1";
    details.id = "detail_div1";
    Acc.id = "Acc_div1"; 
    status.id = "status_div1";
    button.id="button_div1";
    contact.appendChild(p1);
    contact.appendChild(p2);
    contact.appendChild(p3);
    roll.appendChild(p4);
    pos.appendChild(p5);
    status.appendChild(p6);
    details.appendChild(p7);
    details.appendChild(p8);
    details.appendChild(p9);
    Acc.appendChild(p10);
    Acc.appendChild(p11);
    Acc.appendChild(p12);
    
    
    button.appendChild(Edit_BTN);
    button.appendChild(Block_BTN);
    

    rapper.appendChild(contact);
    rapper.appendChild(roll);
    rapper.appendChild( pos);
    rapper.appendChild(status);
    rapper.appendChild(details);
    rapper.appendChild(Acc);
   
    rapper.appendChild(button);
    maindiv.appendChild(rapper);
    

} else{
     contact.appendChild(p1);
     contact.appendChild(p2);
     contact.appendChild(p3);
     roll.appendChild(p4);
     pos.appendChild(p5);
     status.appendChild(p6);
     details.appendChild(p7);
     details.appendChild(p8);
     details.appendChild(p9);
     Acc.appendChild(p10);
     Acc.appendChild(p11);
     Acc.appendChild(p12);
     
     completed.appendChild(p15);
     incompleted.appendChild(p16);
     salary.appendChild(p17);
     button.appendChild(Edit_BTN);
     button.appendChild(Block_BTN);
     

     rapper.appendChild(contact);
     rapper.appendChild(roll);
     rapper.appendChild( pos);
     rapper.appendChild(status);
     rapper.appendChild(details);
     rapper.appendChild(Acc);
     rapper.appendChild(completed); 
     rapper.appendChild(incompleted);
     rapper.appendChild(salary);
     rapper.appendChild(button);
     maindiv.appendChild(rapper);
    }  
   }
   function add(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18){
    //    document.getElementById('name_').value=a1;
    var x1=a1;
    var x2=a2;
    var x3=a3;
    var x4=a4;
    var x5=a5;
    var x6=a6;
    var x7=a7;
    var x8=a8;
    var x9=a9;
    var x10=a10;
    var x11=a11;
    var x12=a12;
    var x13=a13;
    var x14=a14;
    var x15=a15;
    var x16=a16;
    var x17=a17;
    var x18=a18;


    console.log("my fav" + x1);
    localStorage.setItem("Name", x1);
    localStorage.setItem("Mobile_number", x2);
    localStorage.setItem("Email_12", x3);
    localStorage.setItem("Roll", x4);
    localStorage.setItem("Position", x5);
    localStorage.setItem("Status", x6);
    localStorage.setItem("Address_", x7);
    localStorage.setItem("District_", x8);
    localStorage.setItem("Country", x9);
    localStorage.setItem("Aadhar_Number", x10);
    localStorage.setItem("Account_Number", x11);
    localStorage.setItem("IFSC_", x12);
    localStorage.setItem("Task_Complited", x13);
    localStorage.setItem("Task_inComplited", x14);
    localStorage.setItem("Salary", x15);
    localStorage.setItem("Pass_", x16); 
    localStorage.setItem("Qualification_", x17); 
    localStorage.setItem("DOB_", x18);

    window.location.href="edit_form.html";

   }

   function block(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18){
       var block_name = a1;
       var block_Mobile = a2;
       var block_Email = a3;
       var block_Roll = a4;
       var block_Position = a5;
       var block_Status = a6;
       var block_Address = a7;
       var block_District = a8;
       var block_Country = a9;
       var block_Aadhar_number = a10;
       var block_Account_number = a11;
       var block_IFSC = a12;
       var block_task_complited = a13;
       var block_task_incomplited = a14;
       var block_salary = a15;
       var block_pass_ = a16;
       var block_quali = a17;
       var block_Dob = a18;

       console.log(block_name + "welcome");
       
       firebase.database().ref('Block/'+ block_Position + "/" + block_Mobile + block_District ).set({

            Candidate_name: block_name,
            Position: block_Position,
            Roll_number: block_Roll,
            Email: block_Email,
            Mobile_Number: block_Mobile,
            Status: block_Status,
            Password: block_pass_,
            Qualification: block_quali,
            DOB: block_Dob,
            District: block_District,
            Country: block_Country,
            Address: block_Address,
            
            
            Aadhar_number: block_Aadhar_number,
            Bank_account_number: block_Account_number,
            IFSC_number: block_IFSC
        
      });
      alert("Image Added Successfully");

      firebase.database().ref('Marketers_Profile/'+ block_Position + "/" + block_Mobile + block_District).remove();
   }

