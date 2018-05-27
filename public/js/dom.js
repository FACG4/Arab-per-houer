const select = function(selector){
  return document.querySelector(selector);
}

select('#menu').addEventListener('click',()=>{
    select('.menu').classList.toggle('hidden');
})

select(".menu--close").addEventListener("click", () => {
  select(".menu").classList.toggle("hidden");
});

if(select("#user--top-down")){


select("#user--top-down").addEventListener("click", () => {
  select(".user--top-menu").classList.toggle("hidden");
});



select('.user--top-close').addEventListener('click',()=>{
    select('.user--top-menu').classList.toggle('hidden');
})

select('.btn--bid').addEventListener('click',()=>{
    select('.project--details-pop').classList.toggle('hidden');
})

select('#close-btn-project').addEventListener('click',()=>{
    select('.project--details-pop').classList.toggle('hidden');
})

<<<<<<< HEAD
}
=======

>>>>>>> c6d4e3ce1cb3c3c0611d0ddc4a1ea5384b020fa9

   fetch('/','POST' ,name, password, function(res){
     msg.textContent=res;
      console.log("ee")
     if(res === "success"){
     window.location.pathname='/';
    }


  });
