function vacancy(){
    var staff_total_ =  localStorage.getItem("STAFF");
    document.getElementById("staff_total").innerHTML = staff_total_;
    firebase.database().ref().child('Vacancy/Web_developer/').on('value', function(snapshot) {
        
                                 
                 let Count_web = snapshot.val().Number_of_vacancy;
            console.log(Count_web);
                document.getElementById("web_total").innerHTML = Count_web;
           
    });
    firebase.database().ref().child('Vacancy/App_developer/').on('value', function(snapshot) {
        
                                 
        let Count_app = snapshot.val().Number_of_vacancy;
        console.log(Count_app);
       document.getElementById("app_total").innerHTML = Count_app;
  
    });
    firebase.database().ref().child('Vacancy/Marketer/').on('value', function(snapshot) {
        
                                 
        let Count_marketer = snapshot.val().Number_of_vacancy;
        console.log(Count_marketer);
       document.getElementById("marketer_total").innerHTML = Count_marketer;
       V_Total();
    });
    
}

document.getElementById("web_vacancy_btn").onclick = function (){
    
    var web_count = document.getElementById("web_txt").value;
    // alert(web_count + "welcome");
    var x1 = parseInt(web_count);
  var web_c = document.getElementById("web_total").innerHTML;
    var x2 = parseInt(web_c);
//   console.log(web_c);
  var total_web =(x1 + x2);
//  alert("HELLO"+ total);
 firebase.database().ref('Vacancy/Web_developer/').set({
    Number_of_vacancy: total_web
})
 alert("web record added successfully");
 window.location.reload();
}


document.getElementById("app_vacancy_btn").onclick = function (){
    
    var app_count = document.getElementById("app_txt").value;
    var x1 = parseInt(app_count);
  var app_c = document.getElementById("app_total").innerHTML;
    var x2 = parseInt(app_c);
//   console.log(web_c);
  var total_app =(x1 + x2);
 //alert("HELLO"+ total_app);
 firebase.database().ref('Vacancy/App_developer/').set({
    Number_of_vacancy: total_app
})
alert("app record added successfully");
window.location.reload();
}

document.getElementById("marketer_vacancy_btn").onclick = function (){
    
    var marketer_count = document.getElementById("marketer_txt").value;
    var x1 = parseInt(marketer_count);
  var mar_c = document.getElementById("marketer_total").innerHTML;
    var x2 = parseInt(mar_c);
//   console.log(web_c);
  var total_mar =(x1 + x2);
//  alert("HELLO"+ total);
firebase.database().ref('Vacancy/Marketer/').set({
    Number_of_vacancy: total_mar
})
alert("marketer record added successfully");
window.location.reload();
}


function V_Total() {
    var  web_vac_ =parseInt(document.getElementById("web_total").innerHTML);
    var  app_vac_ = parseInt(document.getElementById("app_total").innerHTML);
    var  mar_vac_ = parseInt(document.getElementById("marketer_total").innerHTML);

    var vac_total = web_vac_ + app_vac_ + mar_vac_;
    console.log(vac_total);
    document.getElementById("vacancy_total").innerHTML = vac_total;
    localStorage.setItem("VACANCY",vac_total);
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