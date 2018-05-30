const select = function (selector) {
  return document.querySelector(selector);
};

const btnn = select('.buttonS');
console.log(btnn);
if (btnn) {
  btnn.addEventListener('click', () => {
    const name = select('#name').value;
    const password = select('#password').value;
    const msg = select('.msg');
console.log(name);
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
      const tableName = 'users';
      fetch('/admin/users', 'POST', id, tableName, (err, res) => {
if (err) {
  console.log(err);
} else {
          console.log(res);
}
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


const deleteProject = document.querySelectorAll('.deleteProject');
console.log(deleteProject);
if (deleteProject) {
  deleteProject.forEach((btn) => {
    btn.addEventListener('click', ()=> {

fetch('/admin/projects', 'POST', btn.id, '', (res) => {
        console.log('res',res);
  });
    });
  });
}
