var count;
// var Brand,Shop;
const obj_1 = [];

var x,y;
console.log(obj_1);
function div_content(){
   
    firebase.database().ref().child('Test2/Accessories/').on('value', function(snapshot) {
        snapshot.forEach(
            function(ChilSnapshot) {
                                 
                 let Name = ChilSnapshot.val().Brand_Name;
                 let Position = ChilSnapshot.val().Shop_ID;
                unmodifiableFunction(Name, Position);
            }
        )
    });
}
function  unmodifiableFunction(Name, Position){
    let Name_ = Name;
    let Position_ = Position;
    obj_1.push(
                    {
                        Brand: Name_,
                        Shop: Position_
                    });
                console.log(obj_1);
}


var current_page = 1;
var records_per_page = 3;

// var objJson = [
//     { adName: "AdName 1"},
//     { adName: "AdName 2"},
//     { adName: "AdName 3"},
//     { adName: "AdName 4"},
//     { adName: "AdName 5"},
//     { adName: "AdName 6"},
//     { adName: "AdName 7"},
//     { adName: "AdName 8"},
//     { adName: "AdName 9"},
//     { adName: "AdName 10"}
// ]; // Can be obtained from another source, such as your objJson variable

function prevPage()
{
    if (current_page > 1) {
        current_page--;
        changePage(current_page);
    }
}

function nextPage()
{
    if (current_page < numPages()) {
        current_page++;
        changePage(current_page);
    }
}
    
function changePage(page)
{
    var btn_next = document.getElementById("btn_next");
    var btn_prev = document.getElementById("btn_prev");
    var listing_table = document.getElementById("listingTable");
    var page_span = document.getElementById("page");
 
    // Validate page
        if (page < 1) {
            page = 1;
            // listing_table.innerHTML += "<b>Brand Name: </b>" + obj_1[i].Brand + "<br>" + "<b>Shop Number:</b>" + obj_1[i].Shop + "<br>";
        } 
    if (page > numPages()) page = numPages();

    listing_table.innerHTML = "";

    for (var i = (page-1) * records_per_page; i < (page * records_per_page) && i < obj_1.length; i++) {
        listing_table.innerHTML += "<b>Brand Name: </b>" + obj_1[i].Brand + "<br>" + "<b>Shop Number:</b>" + obj_1[i].Shop + "<br>";
    }
    page_span.innerHTML = page + "/" + numPages();

    if (page == 1) {
        btn_prev.style.visibility = "hidden";
    } else {
        btn_prev.style.visibility = "visible";
    }     

    if (page == numPages()) {
        btn_next.style.visibility = "hidden";
    } else {
        btn_next.style.visibility = "visible";
    }
}

function numPages()
{
    return Math.ceil(obj_1.length / records_per_page);
}

window.onload = function() {
    debugger;
    div_content();
    setTimeout(function() {
        changePage(1);
    }, 1000);
    
};
