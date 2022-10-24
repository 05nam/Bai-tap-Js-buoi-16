
function tinhTong(){
   var soX = document.getElementById("number__1").value ;
   var soN = document.getElementById("number__2").value ;
   var sum = 0;


   for (var i =1; i<=soN; i++){
    
      sum = sum +  (Math.pow(soX,i));
      
   }
   document.getElementById("text_bt2").innerHTML = sum;

}
document.getElementById("btn__02").onclick= tinhTong;





