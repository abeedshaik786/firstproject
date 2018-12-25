
let userNameElement = document.querySelector('#username');
let emailElement = document.querySelector('#email');
let passwordElement = document.querySelector('#password');
let confirmElement = document.querySelector('#conform-password');
let message = '';
// Get the Error Message Elements
let userErrorElement = document.querySelector('#user_error');
let emailErrorElement = document.querySelector('#email_error');
let passwordErrorElement = document.querySelector('#password_error');
let conformErrorElement = document.querySelector('#conform-password_error');
// blur event for Username field
userNameElement.addEventListener(type='blur',function () {
    clearErrorMessage(userNameElement,userErrorElement);

});
emailElement.addEventListener(type='blur',function () {
    clearErrorMessage(emailElement,emailErrorElement);
});
passwordElement.addEventListener(type='blur',function () {
    clearErrorMessage(passwordElement,passwordErrorElement);
    clearErrorMessage(confirmElement,conformErrorElement);
});
confirmElement.addEventListener(type='blur',function () {
    clearErrorMessage(confirmElement,conformErrorElement);
    clearErrorMessage(passwordElement,passwordErrorElement);
});
/*form validation */
function validate() {
    let isValid = true;

    if (userNameElement.value === '') {
        isValid = false;
        message = 'username cont be empty '
        displayErrorMassage(userNameElement, userErrorElement, message);
        return isValid;
    }

    if (userNameElement.value.length < 6) {
        isValid = false;
        message = 'username must be 6 characters';
        displayErrorMassage(userNameElement, userErrorElement, message);
        return isValid;
    }

    if (!userNameElement.value.match(/^[A-Za-z0-9_]{1,15}$/)) {
        isValid = false;
        message = 'username must be 6 characters';
        displayErrorMassage(userNameElement, userErrorElement, message);
        return isValid;
    }
    /*email */
    if (emailElement.value === '') {
        isValid = false;
        message = 'email cont be empty '
        displayErrorMassage(emailElement, emailErrorElement, message);
        return isValid;
    }
    /* password */
    if (passwordElement.value === '') {
        isValid = false;
        message = 'password cont be empty '
        displayErrorMassage(passwordElement, passwordErrorElement, message);
        return isValid;

    }
    if (passwordElement.value.length < 6) {
        isValid = false;
        message = 'password must be 6 characters '
        displayErrorMassage(passwordElement, passwordErrorElement, message);
        return isValid;
    }
    if (confirmElement.value === '') {
        isValid = false;
        message = 'password cont be empty '
        displayErrorMassage(confirmElement, conformErrorElement, message);
        return isValid;

    }
    if (confirmElement.value !== passwordElement.value) {
        isValid = false;
        message = 'conformation and password must be same'
        displayErrorMassage(confirmElement, conformErrorElement, message);
        return isValid;

    }
    if (!isValid) {
        return false;
    } else {
        alert('congratulations your registration completed')
    }

}  /* display error */
    function displayErrorMassage(inputElement, errorElement, message) {
        inputElement.style.backgroundColor = 'lightsalmon';
        inputElement.style.borderColor = 'red';
        inputElement.style.boxShadow = '0 0 15px red';
        errorElement.textContent = message;
        errorElement.style.color = 'red';
    }

    function clearErrorMessage(inputElement, errorElement) {
        inputElement.style.backgroundColor = 'white';
        inputElement.style.borderColor = 'gray';
        inputElement.style.boxShadow = '0 0 0px white';
        errorElement.textContent = '';
    }


