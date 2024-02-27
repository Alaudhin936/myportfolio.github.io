const menuBtn=document.getElementById("menuBtn");
const listItems=document.getElementById("listItems");
menuBtn.onclick=function(){
   
if(listItems.style.right=="-100%"||listItems.style.right==""){
       listItems.style.right="10px";
    listItems.style.transition="0.6s"
}else{
    
    listItems.style.right="-100%";   
}
}