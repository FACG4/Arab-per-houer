const select = function(selector){
  return document.querySelector(selector);
}

   var modal = select('#myModal');
   var btn = select('#myBtn');
   var span = select('.close');
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