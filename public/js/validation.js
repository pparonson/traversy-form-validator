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
    // const errorMessage = formControl.childNodes[5];
    const [, , , , , errorMessage] = formControl.childNodes;
    errorMessage.className = "error-message visible";
    errorMessage.innerHTML = message;
}

function showSuccess(element) {
    const formControl = element.parentElement;
    formControl.className = "form-control success";
}

// event listeners
form.addEventListener("submit", e => {
    e.preventDefault();

    // switch(expression) {
    //   case x:
    //     // code block
    //     break;
    //   case y:
    //     // code block
    //     break;
    //   default:
    //     // code block
    // }

    if (!username.value) {
        showError(username, "Username is required");
    } else {
        showSuccess(username);
    }

    if (!email.value) {
        showError(email, "Email is required");
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
