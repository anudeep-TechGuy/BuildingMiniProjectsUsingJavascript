console.log('inside-app');

const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
var color;
const el = document.getElementById("btn");
const rang=document.querySelector(".color");

el.addEventListener("click", function () {

let hex="#";

for(let i=0; i<6;i++){
 
hex= hex +colors[getRandom()] ;
}

 document.getElementById('content-color').style.backgroundColor=hex;
 rang.textContent=hex;
 
})

function getRandom(){
    return Math.floor(Math.random()*colors.length);
}