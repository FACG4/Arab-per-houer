const select = function(selector){
  return document.querySelector(selector);
}
select("#search").addEventListener("click", () => {
  console.log(ffrd);

});


const btnn = select('.buttonS');
btnn.addEventListener('click', () => {
  const name = select('#name').value;
  const password = select('#password').value;
  const msg = select('.msg');
  console.log(name);
  console.log(password);
  fetch('/login', 'POST', name, password, (res) => {
    msg.textContent = res;

    if (res === 'success') {
      window.location.pathname = '/';
    }
  });
});

console.log('ggggggggggggggggggggggggggggggg');
module.exports = fetch;
