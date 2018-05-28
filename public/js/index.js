var firstName = document.querySelector('#firstName');
console.log(firstName)
var firstNameIcon = document.querySelector('#firstNameIcon');
var lastName = document.querySelector('#lastName');
var lastNameIcon = document.querySelector('#lastNameIcon');
var userName = document.querySelector('#username');
var userNameIcon = document.querySelector('#userNameIcon');
var email = document.querySelector('#email');
var emailIcon = document.querySelector('#emailIcon');
var password = document.querySelector('#password');
var passwordIcon = document.querySelector('#passwordIcon');
var confirmPassword = document.querySelector('#password2');
var confirmPasswordIcon = document.querySelector('#confirmPasswordIcon');

var errorMessage = document.querySelector('#formError');
var formSubmit = document.querySelector('#formSubmit');

function createErrorEventListener(element, errorCondition, errorIcon, errorMsg) {
  element.addEventListener('blur', function(event) {
    console.log(element);
    var value = event.target.value;
    if (errorCondition(value)) {
      errorIcon.style.visibility = 'hidden';
      errorMessage.textContent = '';
    } else {
      errorIcon.style.visibility = 'visible';
      errorMessage.textContent = errorMsg;
    }
  });
};

var isLetters = function(value) {
  return RegExp('^[a-zA-Z ]*$').test(value)
};

var hasNoSpecialCharacters = function(value) {
  return RegExp('^[a-zA-Z0-9_]*$').test(value)
};

function validateEmail(value) {
  var re = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
  return re.test(value.toLowerCase());
}
var isPasswordStrong = function(value) {
  return value.length === 0 || RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})').test(value)
};

var arePasswordsMatching = function(value) {
  return password.value === value
};

createErrorEventListener(firstName, isLetters, firstNameIcon, 'Names cannot contain numbers or special characters');
createErrorEventListener(lastName, isLetters, lastNameIcon, 'Names cannot contain numbers or special characters');
createErrorEventListener(userName, hasNoSpecialCharacters, userNameIcon, 'Usernames cannot contain special characters');

createErrorEventListener(password, isPasswordStrong, passwordIcon, 'Passwords must contain 1 uppercase, 1 lowercase letter, 1 number or special character and be at least 8 characters');

createErrorEventListener(confirmPassword, arePasswordsMatching, confirmPasswordIcon, 'Both passwords must match');
createErrorEventListener(email, validateEmail, emailIcon, 'email is not validate');

console.log(formSubmit);

formSubmit.addEventListener('click', function(event) {
      event.preventDefault()
      if (firstName.value.length > 0 &&
        isLetters(firstName.value) &&
        userName.value.length > 0 &&
        hasNoSpecialCharacters(userName.value) &&
        email.value.length > 0 &&
        validateEmail(email.value) &&
        password.value.length > 0 &&
        isPasswordStrong(password.value) &&
        arePasswordsMatching(confirmPassword.value)
      ) {
        var data = JSON.stringify({
          firstName: firstName.value,
          userName: userName.value,
          password: password.value
        })
        function fetch(url, method, name, pass, callback) {
          var xhr = new XMLHttpRequest();
          xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
              var response = xhr.responseText;
              callback(response);
            }
          }
          var data = JSON.stringify({
            name,
            pass
          })
          xhr.open(method, url);
          xhr.setRequestHeader('content-type', 'application/json')
          xhr.send(data);
        }
        function fetch2(url, method, callback) {
          var xhr = new XMLHttpRequest();
          xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
              var response = xhr.responseText;
              callback(response);
            }
          }
          xhr.open(method, url);
          xhr.send();
        };

      }});
