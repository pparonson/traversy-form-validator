// get DOM elements
const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");

function showError(element, message) {
    element.nextSibling.className = "error-message visible ";
    const formControl = element.parentElement;
    formControl.className = "form-control error";

    const [, , , , , errorMessage] = formControl.childNodes;
    errorMessage.className = "error-message visible";
    errorMessage.innerHTML = message;
}

function showSuccess(element) {
    const formControl = element.parentElement;
    formControl.className = "form-control success";

    const [, , , , , errorMessage] = formControl.childNodes;
    errorMessage.className = "error-message";
    errorMessage.innerHTML = "";
}

const isValidEmail = email => {
    // test() method executes a search for a match between a regular expression and a specified string. Returns true or false
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

// event listeners
form.addEventListener("submit", e => {
    e.preventDefault();

    if (!username.value) {
        showError(username, "Username is required");
    } else {
        showSuccess(username);
    }

    if (!email.value) {
        showError(email, "Email is required");
    } else if (!isValidEmail(email.value)) {
        showError(email, "A valid email address is required");
    } else {
        showSuccess(email);
    }

    if (!password.value) {
        showError(password, "Password is required");
    } else {
        showSuccess(password);
    }

    if (!password2.value) {
        showError(password2, "Confirm password is required");
    } else {
        showSuccess(password2);
    }
});
