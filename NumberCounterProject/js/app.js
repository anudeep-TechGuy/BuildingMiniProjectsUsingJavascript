var count =0;

const val = document.querySelector('#value');
const btn_list = document.querySelectorAll('.btn');



btn_list.forEach(function(items){

    items.addEventListener("click", function(e){
     const grab=e.currentTarget.classList;
     
     if(grab.contains("decrease")){
         count--;
         val.style.color="red";
     }
     else if(grab.contains("increase")){
         count++;
         val.style.color="green";
     }
     else{
         count=0;
         val.style.color="black";
     }
        val.textContent=count;
    })

});
