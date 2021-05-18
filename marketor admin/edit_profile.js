




function edit_form(){





    var Name_form = localStorage.getItem("Name");
    var Mobile_form = localStorage.getItem("Mobile_number");
    var Email_form = localStorage.getItem("Email_12");
    var Roll_form = localStorage.getItem("Roll");
    var Position_form = localStorage.getItem("Position");
    var Status_form = localStorage.getItem("Status");
    var Address_form = localStorage.getItem("Address_");
    var Distric_form = localStorage.getItem("District_");
    var Country_form = localStorage.getItem("Country");
    var Aadhar_form = localStorage.getItem("Aadhar_Number");
    var Account_form = localStorage.getItem("Account_Number");
    var IFSC_form = localStorage.getItem("IFSC_");
    var Task_complite_form = localStorage.getItem("Task_Complited");
    var Task_incomplite_form = localStorage.getItem("Task_inComplited");
    var Salary_form = localStorage.getItem("Salary");
    var Pass_form = localStorage.getItem("Pass_"); 
    var Quali_form = localStorage.getItem("Qualification_"); 
    var Dob_form = localStorage.getItem("DOB_");

    // 
    console.log("velan" + Distric_form);
    document.getElementById('edit_name_').value = Name_form;
    document.getElementById('edit_position').value = Position_form;
    document.getElementById('edit_roll_no_').value = Roll_form;
    document.getElementById('edit_email_').value = Email_form;
    document.getElementById('edit_password_').value = Pass_form;
    document.getElementById('edit_qualification_').value = Quali_form; 
    document.getElementById('edit_dob_').value = Dob_form;
    document.getElementById('edit_status_').value = Status_form;
    document.getElementById('edit_mobile_').value = Mobile_form; 
    document.getElementById('edit_address_').value = Address_form;
    document.getElementById('edit_countrySelect').value =Country_form;
    document.getElementById('edit_citySelect').value = Distric_form;
    document.getElementById('edit_aadhar_number_').value = Aadhar_form;
    document.getElementById('edit_bank_no_').value = Account_form;
    document.getElementById('edit_ifsc_').value = IFSC_form;
  }

  

  document.getElementById("edit_sub").onclick = function() {

    var update_name = document.getElementById('edit_name_').value ;
    var update_position = document.getElementById('edit_position').value;
    var update_roll_no = document.getElementById('edit_roll_no_').value;
    var update_email = document.getElementById('edit_email_').value;
    var update_pass = document.getElementById('edit_password_').value;
    var update_quali = document.getElementById('edit_qualification_').value; 
    var update_dob = document.getElementById('edit_dob_').value;
    var update_status = document.getElementById('edit_status_').value;
    var update_mobile = document.getElementById('edit_mobile_').value; 
    var update_address = document.getElementById('edit_address_').value;
    var update_country = document.getElementById('edit_countrySelect').value;
    var update_city = document.getElementById('edit_citySelect').value;
    var update_aadhar = document.getElementById('edit_aadhar_number_').value;
    var update_bank_no = document.getElementById('edit_bank_no_').value;
    var update_ifsc = document.getElementById('edit_ifsc_').value;
    // var update_name = document.getElementById("name_").value;
    // var update_roll = document.getElementById("roll_no_").value;
    // var update_detail = document.getElementById("details_").value;
    // var update_status = document.getElementById("status_").value;
    // var update_task_completed = document.getElementById("task_complete_").value;
    // var update__task_incompleted = document.getElementById("task_incomplete_").value;
    // var update_salary = document.getElementById("salary_").value;
     
          firebase.database().ref('Marketers_Profile/'+ update_position + "/" +update_mobile + update_city ).set({
            Candidate_name: update_name,
            Position: update_position,
            Roll_number: update_roll_no,
            Email: update_email,
            Password: update_pass,
            Qualification: update_quali,
            DOB: update_dob,
            Status: update_status,
            Mobile_Number: update_mobile,
            Address: update_address,
            Country: update_country,
            District: update_city,
            Aadhar_number: update_aadhar,
            Bank_account_number: update_bank_no,
            IFSC_number: update_ifsc
           
          });
          alert("Record updated Successfully");
      
          relo();
    }

    function relo(){
      $(document).ready(function () { 
        setTimeout(function () { 
         // alert('You Are SignIn Successfully');
          window.location.href = "home.html";
        }, 2000); 
      }); 
    }