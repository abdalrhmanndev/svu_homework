var po = document.getElementsByClassName("cart");
var sum;
function buy(element){
    var num = document.getElementsByClassName("price").value;
    sum+=num;
    element.style.color = "red";
    document.getElementsByClassName('bill').innerHTML = sum;
}

document.addEventListener('DOMContentLoaded', function(){
    // const contentDiv = document.getElementById('content');
    // if(data){
        document.getElementsByClassName('bill').innerHTML = sum;
    // }
 });