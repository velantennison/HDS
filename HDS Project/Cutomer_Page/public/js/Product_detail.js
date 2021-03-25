function openWin() {
    var User_id = sessionStorage.getItem('UID_FROM_SIGN_UP');
    // alert(User_id);
    if(User_id){	
        
            var x = document.getElementById("quantity").value;
    var y = document.getElementById("Price").innerHTML;


    var sum = x*y;
    sessionStorage.setItem("SUM1",sum);
    
    window.location.href="Customer_form.html";
}
else{
alert("please login to make order")
window.location.href = "login.html";
}
}
