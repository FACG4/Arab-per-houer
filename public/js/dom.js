const select = function(selector){
  return document.querySelector(selector);
}

// select('#menu').addEventListener('click',()=>{
//     select('.menu').classList.toggle('hidden');
// })

// select(".menu--close").addEventListener("click", () => {
//   select(".menu").classList.toggle("hidden");
// });

// select("#user--top-down").addEventListener("click", () => {
//   select(".user--top-menu").classList.toggle("hidden");
// });

// select('.user--top-close').addEventListener('click',()=>{
//     select('.user--top-menu').classList.toggle('hidden');
// })

// select('.btn--bid').addEventListener('click',()=>{
//     select('.project--details-pop').classList.toggle('hidden');
// })

// select('#close-btn-project').addEventListener('click',()=>{
//     select('.project--details-pop').classList.toggle('hidden');
// })




   const btnn= select(".buttonS");
   btnn.addEventListener("click", function(){
    console.log("ddddddddddddddd")
   const name = select("#name").value;
   const password = select("#password").value;
   const msg = select(".msg");
   console.log(name);
   console.log(password);
   
   

   fetch('/login','POST' ,name, password, function(res){
     console.log("resjjjj",res);
     
     msg.textContent=res;
      
     if(res === "success"){
       console.log("go to home");
       
     window.location.pathname='/';
    }


   });
  });


