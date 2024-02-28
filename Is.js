const menuBtn=document.getElementById("menuBtn");
const listItems=document.getElementById("listItems");
menuBtn.onclick=function(){
   
if(listItems.style.display=="none"||listItems.style.display==""){
       listItems.style.display="block";
    
}else{
    
    listItems.style.display="none";   
}
}
