const red = document.querySelector("#red");
const yellow = document.querySelector("#yellow");
const green = document.querySelector("#green");
   
function changelights(){
   setTimeout(()=>{
      redlight()
   }, 0);
   setTimeout(()=>{
      yellowlight()
   }, 4000);
   setTimeout(()=>{
      greenlight()
   }, 7000);
}
   function redlight(){
      red.classList.add("active")
      setTimeout(()=>{
         red.classList.remove("active")
      },5000);
   }
   function yellowlight(){
      yellow.classList.add("active")
      setTimeout(()=>{
         yellow.classList.remove("active")
      },3000);
   }
   function greenlight(){
      green.classList.add("active")
      setTimeout(()=>{
         green.classList.remove("active")
      },5000);
   }
setInterval(changelights,13000);