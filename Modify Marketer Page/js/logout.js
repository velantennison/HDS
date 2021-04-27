
document.getElementById("logout1").onclick = function()
{   
    //firebase.auth().signOut();
    firebase.auth().signOut().then(() => {
    // Sign-out successful.
    //alert("Signed out");
    test();
        }).catch((error) => {
    // An error happened.
    });
    
    //window.location.href = 'index.html';
    //document.getElementById('result-name').value = "";
}

function test()
{
//window.location.assign('index.html');
sessionStorage.clear();
localStorage.clear();
window.location.href = 'index.html';

}
