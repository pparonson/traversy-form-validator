// get DOM elements
const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");

function showError(element, message) {
    const formControl = element.parentElement;
    formControl.setAttribute("class", "error");

    console.log(`Error: ${message}`);
}

function showSuccess(element) {
    const formControl = element.parentElement;
    formControl.setAttribute("class", "success");
}

// event listeners
form.addEventListener("submit", e => {
    e.preventDefault();

    if (!username.value) {
        showError(username, "Username is required");
    } else {
        showSuccess(username);
    }
});
