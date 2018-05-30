const select = function (selector) {
  return document.querySelector(selector);
};
const btnn = select('.buttonS');
console.log('e', btnn);

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
  buttons.forEach((e) => {
    e.addEventListener('click', () => {
      const id = e.id;
      const tableName = 'users';
      fetch('/admin/users', 'POST', id, tableName, (err, res) => {
        if (err) {
          console.log(err);
        } else {
          location.reload();
        }
      });
    });
  });
}
const searchbtn = select('#btnSearch');
if (searchbtn) {
  searchbtn.addEventListener('click', () => {
    const s = select('#search').value;
    const d = 'f';
    fetch('/', 'POST', s, d, (res) => {

    });
  });
}


const deleteProject = document.querySelectorAll('.deleteProject');
console.log(deleteProject);
if (deleteProject) {
  deleteProject.forEach((btn) => {
    btn.addEventListener('click', () => {
      fetch('/admin/projects', 'POST', btn.id, '', (res) => {
        console.log('res', res);
      });
    });
  });
}
