const select = function(selector){
  return document.querySelector(selector);
}

select('#menu').addEventListener('click',()=>{
    select('.menu').classList.toggle('hidden');
})

select('.menu--close').addEventListener('click',()=>{
    select('.menu').classList.toggle('hidden');
})

select('#user--top-down').addEventListener('click',()=>{
    select('.user--top-menu').classList.toggle('hidden');
})

select('.user--top-close').addEventListener('click',()=>{
    select('.user--top-menu').classList.toggle('hidden');
})

select('.btn--bid').addEventListener('click',()=>{
    select('.project--details-pop').classList.toggle('hidden');
})

select('#close-btn-project').addEventListener('click',()=>{
    select('.project--details-pop').classList.toggle('hidden');
})

   var modal = select('#myModal');
   var btn = select('#myBtn');
   var span = select('.close');
   var msg= select('.msg');

   btn.onclick = function() {
       modal.style.display = "block";
   }
   
   span.onclick = function() {
       modal.style.display = "none";
   }
   window.onclick = function(event) {
       if (event.target == modal) {
           modal.style.display = "none";
       }
   }
  
   const btnn= select(".buttonS");
   btnn.addEventListener("click", function(){
   const name = select("#name").value;
   const password = select("#password").value;
  
   fetch('/','POST' ,name, password, function(res){
     msg.textContent=res;
      console.log("ee")
     if(res === "success"){
     window.location.pathname='/';
    }
     
    
   });
  });

  fetch2('/project/1','GET' ,function(res){
    console.log("kkk");
    
    console.log("dom res",res);
    
  })