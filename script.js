var hr=document.getElementById("hr");
var min=document.getElementById("min");
var sec=document.getElementById("sec");
setInterval(function(){
    let time=new Date();
hr.textContent=time.getHours();
min.textContent=time.getMinutes();
sec.textContent=time.getSeconds();
},1000);
