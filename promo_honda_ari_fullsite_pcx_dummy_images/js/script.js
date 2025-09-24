document.addEventListener("DOMContentLoaded",()=>{
  const toggle=document.querySelector(".menu-toggle");
  const menu=document.querySelector("nav .menu");
  if(toggle){toggle.addEventListener("click",()=>{menu.classList.toggle("show");});}
});