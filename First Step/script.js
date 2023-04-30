// document.getElementById('1').onclick = function() {
//     alert("Button was clicked!");
//     let myString = "";
    
// }


let myString = "";
function myFunction(clicked_id) {
    document.getElementById("demo").innerHTML += document.getElementById(clicked_id).value + ", ";
}



