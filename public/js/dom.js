const select = function(selector){
  return document.querySelector(selector);
}
select("#fa-search").addEventListener("click", () => {
  console.log(ffrd);
  select(".fa-search").classList.toggle("hidden");
});


// select('#menu').addEventListener('click',()=>{
//     select('.menu').classList.toggle('hidden');
// })
//
// select(".menu--close").addEventListener("click", () => {
//   select(".menu").classList.toggle("hidden");
// });
//
// if(select("#user--top-down")){
//
//
// select("#user--top-down").addEventListener("click", () => {
//   select(".user--top-menu").classList.toggle("hidden");
// });
//
//
//
// select('.user--top-close').addEventListener('click',()=>{
//     select('.user--top-menu').classList.toggle('hidden');
// })
//
// select('.btn--bid').addEventListener('click',()=>{
//     select('.project--details-pop').classList.toggle('hidden');
// })
//
// select('#close-btn-project').addEventListener('click',()=>{
//     select('.project--details-pop').classList.toggle('hidden');
// })
//
//
//
//    fetch('/','POST' ,name, password, function(res){
//      msg.textContent=res;
//       console.log("ee")
//      if(res === "success"){
//      window.location.pathname='/';
//     }
//   });
//
//
//   const buttonSearch = select(".search");
//   console.log("jj",buttonSearch);
//   const x = select(".x");
//   console.log("kk",x);
  // console.log("hhhhhhhhhhhhhhhhh");
