


    var citiesOptions;
    var citiesByState = {
        Andhra_Pradhesh: ["select","Anantapur","Chittoor","East Godavari","Guntur","Kadapa","Krishna","Kurnool","Nellore","Prakasam","Srikakulam","Visakhapatnam","Vizianagaram","West Godavari"],
        Arunachala_Pradhesh:["select","Anjaw","Changlang","Dibang Valley","East Kameng","East Siang","Kamle","Kra Daadi","Kurung Kumey","Lepa Rada","Lohit","Longding","Lower Dibang Valley","Lower Siang","Lower Subansiri","Namsai","Pakke Kessang","Papum Pare","Shi Yomi","Siang","Tawang","Tirap","Upper Siang","Upper Subansiri","West Kameng","West Siang"],
        Assam:["select","Baksa","Barpeta","Biswanath","Bongaigaon","Cachar","Charaideo","Chirang","Darrang","Dhemaji","Dhubri","Dibrugarh","Dima Hasao (North Cachar Hills)","Goalpara","Golaghat","Hailakandi","Hojai","Jorhat","Kamrup","Kamrup Metropolitan","Karbi Anglong","Karimganj","Kokrajhar","Lakhimpur","Majuli","Morigaon","Nagaon","Nalbari","Sivasagar","Sonitpur","South Salamara-Mankachar","Tinsukia","Udalguri","West Karbi Anglong"],
        Bihar:["select","Araria","Arwal","Aurangabad","Banka","Begusarai","Bhagalpur","Bhojpur","Buxar","Darbhanga","East Champaran (Motihari)","Gaya","Gopalganj","Jamui","Jehanabad","Kaimur (Bhabua)","Katihar","Khagaria","Kishanganj","Lakhisarai","Madhepura","Madhubani","Munger (Monghyr)","Muzaffarpur","Nalanda","Nawada","Patna","Purnia (Purnea)","Rohtas","Saharsa","Samastipur","Saran","Sheikhpura","Sheohar","Sitamarhi","Siwan","Supaul","Vaishali","West Champaran"],
        Chhattisgarh:["select","Balod","Baloda Bazar","Balrampur","Bastar","Bemetara","Bijapur","Bilaspur","Dantewada","Dhamtari","Durg","Gariaband","Gaurella-Pendra-Marwahi","Janjgir-Champa","Jashpur","Kabirdham","Kanker","Kondagaon","Korba","Koriya","Mahasamund","Mungeli","Narayanpur","Raigarh","Raipur","Rajnandgaon","Sukma","Surajpur","Surguja"],
        Chandigarh:["Chandigarh"],
        Dadra_and_Nagar_Haveli_and_Daman_and_Diu:["Daman district","Diu district","Dadra and Nagar Haveli district"],
        Delhi:["select","Central Delhi","East Delhi","New Delhi","North Delhi","North East Delhi","North West Delhi","Shahdara","South Delhi","South East Delhi","South West Delhi","West Delhi"],
        Goa:["select","North Goa","South Goa"],
        Gujarat:["select","Ahmedabad","Amreli","Anand","Aravalli","Banaskantha","Bharuch","Bhavnagar","Botad","Chhota Udaipur","Dahod","Dang","Devbhoomi Dwarka","Gandhinagar","Gir Somnath","Jamnagar","Junagadh","Kutch","Kheda","Mahisagar","Mehsana","Morbi","Narmada","Navsari","Panchmahal","Patan","Porbandar","Rajkot","Sabarkantha","Surat","Surendranagar","Tapi","Vadodara","Valsad"],
        Haryana:["select","Ambala","Bhiwani","Charkhi Dadri","Faridabad","Fatehabad","Gurugram","Hisar","Jhajjar","Jind","Kaithal","Karnal","Kurukshetra","Mahendragarh","Nuh","Palwal","Panchkula","Panipat","Rewari","Rohtak","Sirsa","Sonipat","Yamunanagar"],
        Himachal_Pradhesh:["select","Bilaspur","Chamba","Hamirpur","Kangra","Kinnaur","Kullu","Lahaul and Spiti","Mandi","Shimla","Sirmaur","Solan","Una"],
        Jammu_and_Kashmir:["select","Anantnag","Bandipore","Baramulla","Budgam","Doda","Ganderbal","Jammu","Kathua","Kishtwar","Kulgam","Kupwara","Poonch","Pulwama","Rajouri","Ramban","Reasi","Samba","Shopian","Srinagar","Udhampur"],
        Jharkhand:["select","Bokaro","Chatra","Deoghar","Dhanbad","Dumka","East Singhbhum","Garhwa","Giridih","Godda","Gumla","Hazaribag","Jamtara","Khunti","Koderma","Latehar","Lohardaga","Pakur","Palamu","Ramgarh","Ranchi","Sahibganj","Seraikela-Kharsawan","Simdega","West Singhbhum"],
        Karnataka:["select","Bagalkot","Ballari (Bellary)","Belagavi (Belgaum)","Bengaluru (Bangalore) Rural","Bengaluru (Bangalore) Urban","Bidar","Bijapur","Chamarajanagar","Chikballapur","Chikkamagaluru","Chitradurga","Dakshina Kannada","Davanagere","Dharwad","Gadag","Gulbarga","Hassan","Haveri","Kodagu","Kolar","Koppal","Mandya","Mysore","Raichur","Ramanagara","Shimoga","Tumkur","Udupi","Uttara Kannada","Vijayanagara","Yadgir"],
        Kerala:["select","Alappuzha","Ernakulam","Idukki","Kannur","Kasaragod","Kollam","Kottayam","Kozhikode","Malappuram","Palakkad","Pathanamthitta","Thiruvananthapuram","Thrissur","Wayanad"],
        Ladakh:["Kargil","Leh"],
        Madhya_Pradhesh:["select","Agar Malwa","Alirajpur","Anuppur","Ashoknagar","Balaghat","Barwani","Betul","Bhind","Bhopal","Burhanpur","Chhatarpur","Chhindwara","Damoh","Datia","Dewas","Dhar","Dindori","Guna","Gwalior","Harda","Hoshangabad","Indore","Jabalpur","Jhabua","Katni","Khandwa","Khargone","Mandla","Mandsaur","Morena","Narsinghpur","Neemuch","Panna","Raisen","Rajgarh","Ratlam","Rewa","Sagar","Satna","Sehore","Seoni","Shahdol","Shajapur","Sheopur","Shivpuri","Sidhi","Singrauli","Tikamgarh","Ujjain","Umaria","Vidisha"],
        Maharashtra:["select","Ahmednagar","Akola","Amravati","Aurangabad","Beed","Bhandara","Buldhana","Chandrapur","Dhule","Gadchiroli","Gondia","Hingoli","Jalgaon","Jalna","Kolhapur","Latur","Mumbai City","Mumbai Suburban","Nagpur","Nanded","Nandurbar","Nashik","Osmanabad","Palghar","Parbhani","Pune","Raigad","Ratnagiri","Sangli","Satara","Sindhudurg","Solapur","Thane","Wardha","Washim","Yavatmal"],
        Manipur:["select","Bishnupur","Chandel","Churachandpur","Imphal East","Imphal West","Jiribam","Kakching","Kamjong","Kangpokpi","Noney","Pherzawl","Senapati","Tamenglong","Tengnoupal","Thoubal","Ukhrul"],
        Meghalaya:["select","East Garo Hills","East Jaintia Hills","East Khasi Hills","North Garo Hills","Ri Bhoi","South Garo Hills","South West Garo Hills","South West Khasi Hills","West Garo Hills","West Jaintia Hills","West Khasi Hills"],
        Mizoram:["select","Aizawl","Champhai","Kolasib","Lawngtlai","Lunglei","Mamit","Saiha","Serchhip"],
        Nagaland:["select","Dimapur","Kiphire","Kohima","Longleng","Mokokchung","Mon","Peren","Phek","Tuensang","Wokha","Zunheboto"],
        Odisha:["select","Angul","Balangir","Balasore","Bargarh","Bhadrak","Boudh","Cuttack","Deogarh","Dhenkanal","Gajapati","Ganjam","Jagatsinghapur","Jajpur","Jharsuguda","Kalahandi","Kandhamal","Kendrapara","Kendujhar (Keonjhar)","Khordha","Koraput","Malkangiri","Mayurbhanj","Nabarangpur","Nayagarh","Nuapada","Puri","Rayagada","Sambalpur","Sonepur","Sundargarh"],
        Puducherry:["Karaikal","Mahe","Puducherry","Yanam"],
        Punjab:["select","Amritsar","Barnala","Bathinda","Faridkot","Fatehgarh Sahib","Fazilka","Ferozepur","Gurdaspur","Hoshiarpur","Jalandhar","Kapurthala","Ludhiana","Mansa","Moga","Muktsar","Nawanshahr(Shahid Bhagat Singh Nagar)","Pathankot","Patiala","Rupnagar","Sahibzada Ajit Singh Nagar (Mohali)","Sangrur","Tarn Taran"],
        Rajasthan:["select","Ajmer","Alwar","Banswara","Baran","Barmer","Bharatpur","Bhilwara","Bikaner","Bundi","Chittorgarh","Churu","Dausa","Dholpur","Dungarpur","Hanumangarh","Jaipur","Jaisalmer","Jalore","Jhalawar","Jhunjhunu","Jodhpur","Karauli","Kota","Nagaur","Pali","Pratapgarh","Rajsamand","Sawai Madhopur","Sikar","Sirohi","Sri Ganganagar","Tonk","Udaipur"],
        Sikkim:["select","East Sikkim","North Sikkim","South Sikkim","West Sikkim"],
        Tamil_Nadu:["select","Ariyalur","Chengalpet","Chennai","Coimbatore","Cuddalore","Dharmapuri","Dindigul","Erode","Kallakurichi","Kancheepuram","Karur","Krishnagiri","Madurai","Mayiladuthurai","Nagapattinam","Namakkal","Nilgiris","Perambalur","Pudukkottai","Ramanathapuram","Ranipet","Salem","Sivagangai","Tenkasi","Thanjavur","Theni","Thoothukudi","Tiruchirappalli","Tirunelveli","Tirupattur","Tiruppur","Tiruvallur","Tiruvannamalai","Tiruvarur","Vellore","Viluppuram","Virudhunagar"],
        Telangana:["select","Adilabad","Bhadradri Kothagudem","Hyderabad","Jagitial","Jangaon","Jayashankar Bhupalpally","Jogulamba Gadwal","Kamareddy","Karimnagar","Khammam","Komaram Bheem","Mahabubabad","Mahabubnagar","Mancherial","Medak","Medchal–Malkajg","Mulugu","Nagarkurnool","Narayanpet","Nalgonda","Nirmal","Nizamabad","Peddapalli","Rajanna Sircilla","Ranga Reddy","Sangareddy","Siddipet","Suryapet","Vikarabad","Wanaparthy","Warangal Rural","Warangal Urban","Yadadri Bhuvanagiri"],
        Tripura:["select","Dhalai","Sipahijala","Khowai","Gomati","Unakoti","North Tripura","South Tripura","West Tripura"],
        Uttar_Pradhesh:["select","Agra","Aligarh","Allahabad","Ambedkar Nagar","Amethi","Amroha","Auraiya","Azamgarh","Badaun","Bagpat","Bahraich","Ballia","Balrampur","Banda","Barabanki","Bareilly","Basti","Bijnor","Bulandshahr","Chandauli (Varanasi Dehat)","Chitrakoot","Deoria","Etah","Etawah","Faizabad","Farrukhabad","Fatehpur","Firozabad","Gautam Buddha Nagar","Ghaziabad","Ghazipur","Gonda","Gorakhpur","Hamirpur","Hapur","Hardoi","Hathras","Jalaun","Jaunpur","Jhansi","Kannauj","Kanpur Dehat","Kanpur Nagar","Kasganj","Kaushambi","Kushinagar","Lakhimpur Kheri","Lalitpur","Lucknow","Maharajganj","Mahoba","Mainpuri","Mathura","Mau","Meerut","Mirzapur","Moradabad","Muzaffarnagar","Pilibhit","Pratapgarh","Rae Bareli","Rampur","Saharanpur","Sant Kabir Nagar","Sant Ravidas Nagar","Sambhal","Shahjahanpur","Shamli","Shravasti","Siddharthnagar","Sitapur","Sonbhadra","Sultanpur","Unnao","Varanasi (Kashi)"],
        Uttarakhand:["select","Almora","Bageshwar","Chamoli","Champawat","Dehradun","Haridwar","Nainital","Pauri Garhwal","Pithoragarh","Rudraprayag","Tehri Garhwal","Udham Singh Nag","Uttarkashi"],
        
        West_Bengal:["select","Alipurduar","Bankura","Birbhum","Cooch Behar","Dakshin Dinajpur (South Dinajpur)","Darjeeling","Hooghly","Howrah","Jalpaiguri","Jhargram","Kalimpong","Kolkata","Malda","Murshidabad","Nadia","North 24 Parganas","Paschim Medinipur (West Medinipur)","Paschim (West) Burdwan (Bardhaman)","Purba Burdwan (Bardhaman)","Purba Medinipur (East Medinipur)","Purulia","South 24 Parganas","Uttar Dinajpur (North Dinajpur)"]
       
       
    }
function makeSubmenu_1(value) {
if(value.length==0) document.getElementById("add_citySelect").innerHTML = "<option></option>";
else {
var citiesOptions = "";
for(cityId in citiesByState[value]) {
citiesOptions+="<option>"+citiesByState[value][cityId]+"</option>";
}
document.getElementById("add_citySelect").innerHTML = citiesOptions;
}
}

function resetSelection() {
document.getElementById("add_countrySelect").selectedIndex = 0;
document.getElementById("add_citySelect").selectedIndex = 0;
}


document.getElementById('add_emp_sub').onclick = function(){

    // e.preventDefault();

//    alert("welcome");
    var first_name_ = document.getElementById('add_name_').value;
    var position_ = document.getElementById('add_position').value;
    var roll_number_ = document.getElementById('add_roll_no_').value;
    var email_ = document.getElementById('add_email_').value;
    var pass_ = document.getElementById('add_password_').value;
    var qualification_ = document.getElementById('add_qualification_').value;
    var dob_ = document.getElementById('add_dob_').value;
    var status_ =  document.getElementById('add_status_').value;
    var mobile_number_ = document.getElementById('add_mobile_').value; 
    var address_ = document.getElementById('add_address_').value;
    var country_ = document.getElementById('add_countrySelect').value;
    var district = document.getElementById('add_citySelect').value;
    
    
    var aadhar_number_ = document.getElementById('add_aadhar_number_').value;
   
    var bank_account_number_ =  document.getElementById('add_bank_no_').value;
    var ifsc_number_ =  document.getElementById('add_ifsc_').value;

    console.log(email_);

            firebase.auth().createUserWithEmailAndPassword(email_, pass_)
            .then(function(response)
            {   console.log('success');
                  console.log(response);
                //   var x1= firebase.auth().currentUser.uid;
                  
           
                  firebase.database().ref('Marketers_Profile/'+ position_+ "/" + mobile_number_ + district).set({
                  
             
                    Candidate_name: first_name_,
                    Position: position_,
                    Roll_number: roll_number_,
                    Status:status_,
                    Password: pass_,
                    Qualification: qualification_,
                    DOB: dob_,
                    Mobile_Number: mobile_number_,
                    Address: address_,
                    Country: country_,
                    District: district,
                    Aadhar_number: aadhar_number_, 
                    Bank_account_number: bank_account_number_,
                    IFSC_number: ifsc_number_,
                    UserId: firebase.auth().currentUser.uid,
                    Email: firebase.auth().currentUser.email
                      })
            
            
                })
            .catch(function(error){
                var errorCode = error.code;
                var errorMessage = error.Message;
                console.log(errorCode);
                console.log(errorMessage);
                alert('The email id is already in use.')
            });
        
            alert('hello ' + first_name_ + ' succesfully registered');
         
}



function roll_no(){
    alert("hello");
    var x1_ = document.getElementById("add_position").value;
    var playersRef = firebase.database().ref("Marketers_Profile/" +  x1_ + "/") ;
    playersRef.on('value',getReq);
    function getReq(snap){
     var array = [];
        snap.forEach(keyReq => { 
            var total = keyReq.val().Roll_number;
            var res = total.split('-');
            var Number=res[1];
            var array_val = parseInt(Number);
            array.push(array_val);
            console.log(array);
            
            var high_=Math.max(...array);
            var roll_1 = high_ + 1;
            var x2_ = "EHDSS";
            var roll_number_12 =    x2_ + x1_[0] + '-' + roll_1 ;
            console.log("roll number" + roll_number_12);
            document.getElementById("add_roll_no_").value = roll_number_12;
         });
    }
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
  //window.location.assign('home.html');
  window.location.href = 'index.html';
 }