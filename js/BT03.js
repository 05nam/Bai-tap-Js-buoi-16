

function tinhGiaiThua(){
   var number_n = document.getElementById("number__n").value ;
   var sum = 1;
   for (let i = 1; i <=number_n; i++){
      

         sum = sum*i
      }
      
   
   document.getElementById("text_bt3").innerHTML = sum;

}


document.getElementById("btn__03").onclick=tinhGiaiThua;

