const subscriptionForm = document.querySelector(".subscription-form");
const email = document.querySelector(".subscription-email");
const errorMsg = document.querySelector(".subscription-error-msg");

subscriptionForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    checkEmail();
});

function checkEmail() {
    const emailValue = email.value;
    // Email
    if (emailValue === "") {
        setErrorFor(email, "Email cannot be empty");
    } else if (!isValidEmail(emailValue)) {
        setErrorFor(email, "Looks like this is not an email");
    } else {
        setSuccessFor(email);
    }
}

function isValidEmail(emailValue) {
    return /^([A-Za-z0-9_-]+\.)*[A-Za-z0-9_-]+\@([A-Za-z0-9_-]+\.)+[A-Za-z]{2,4}$/.test(
        emailValue
    );
}

function setErrorFor(email, msg) {
    email.classList.add("show-input-error");
    errorMsg.innerText = msg;
}

function setSuccessFor(email) {
    email.classList.remove("show-input-error");
    email.innerText = "";
    errorMsg.innerText = "";
}
