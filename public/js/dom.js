select("#menu").addEventListener("click", () => {
  select(".menu").classList.toggle("hidden");
});

select(".menu--close").addEventListener("click", () => {
  select(".menu").classList.toggle("hidden");
});

select("#user--top-down").addEventListener("click", () => {
  select(".user--top-menu").classList.toggle("hidden");
});

select(".user--top-close").addEventListener("click", () => {
  select(".user--top-menu").classList.toggle("hidden");
});

const select = function(selector) {
  return document.querySelector(selector);
};

var modal = select("#myModal");
var btn = select("#myBtn");
var span = select(".close");
btn.onclick = function() {
  modal.style.display = "block";
};

span.onclick = function() {
  modal.style.display = "none";
};
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const btnn = select(".buttonS");

btnn.addEventListener("click", function() {
  const name = select("#name").value;
  const password = select("#password").value;
  console.log(name, "f");
  console.log(password, "pass");
  fetch("/a", "POST", name, function(res) {
    console.log("send");
  });
});
