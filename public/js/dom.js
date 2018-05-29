const select = function (selector) {
  return document.querySelector(selector);
};
if (select('#menu')) {
  select('#menu').addEventListener('click', () => {
    select('.menu').classList.toggle('hidden');
  });

  select('.menu--close').addEventListener('click', () => {
    select('.menu').classList.toggle('hidden');
  });

  select('#user--top-down').addEventListener('click', () => {
    select('.user--top-menu').classList.toggle('hidden');
  });

  select('.user--top-close').addEventListener('click', () => {
    select('.user--top-menu').classList.toggle('hidden');
  });

  select('.btn--bid').addEventListener('click', () => {
    select('.project--details-pop').classList.toggle('hidden');
  });

  select('#close-btn-project').addEventListener('click', () => {
    select('.project--details-pop').classList.toggle('hidden');
  });


  select('#sign-pop').addEventListener('click', () => {
    select('.model--pop-sign').classList.toggle('hidden');
  });
  select('#close-sign-pop').addEventListener('click', () => {
    select('.model--pop-sign').classList.toggle('hidden');
  });
}
const btnn = select('.buttonS');
console.log(btnn);
if (btnn) {
  btnn.addEventListener('click', () => {
    const name = select('#name').value;
    const password = select('#password').value;
    const msg = select('.msg');

    fetch('/login', 'POST', name, password, (res) => {
      msg.textContent = res;

      if (res === 'success') {
        window.location.pathname = '/';
      }
    });
  });
}

const buttons = document.querySelectorAll('.x');
if (buttons) {
  console.log(buttons);
  buttons.forEach((e) => {
    e.addEventListener('click', () => {
      const id = e.id;
      const password = 'fff';
      fetch('/user', 'POST', id, password, (res) => {
        console.log('ddddddddddd');
      });
    });
  });
}
const searchbtn = select('#btnSearch');
console.log('qqqqqq', searchbtn);
if (searchbtn) {
  searchbtn.addEventListener('click', () => {
    const s = select('#search').value;
    console.log('s', s);
    const d = 'f';
    fetch('/', 'POST', s, d, (res) => {
      console.log('ox');
    });
  });
}

