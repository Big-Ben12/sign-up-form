function validateForm() {
    const firstName = document.getElementById("first_name").value;
    const lastName = document.getElementById("last_name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const pass = document.getElementById("password").value;
    const confirmPass = document.getElementById("confirm_password").value
       
    const firstNameErr = document.getElementById("error_first_name");
    const lastNameErr = document.getElementById("error_last_name");
    const emailErr = document.getElementById("error_email");
    const phoneErr = document.getElementById("error_phone");
    const passErr = document.getElementById("error_password");
    const confirmPassErr = document.getElementById("error_confirm_password");

    firstNameErr.textContent = "";
    lastNameErr.textContent = "";
    emailErr.textContent = "";
    phoneErr.textContent = "";
    passErr.textContent = "";
    confirmPassErr.textContent = "";

    let isValid = true;

    if (firstName === "" || /\d/.test(firstName)) {
        firstNameErr.textContent = "Please enter first name properly.";
        isValid = false;
    }

    if (lastName === "" || /\d/.test(lastName)) {
        lastNameErr.textContent = "Please enter last name properly.";
        isValid = false;
    }

    if (email === "" || !email.includes("@") || !email.includes(".")) {
        emailErr.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    const phoneRegex = /^\d{10}$/; // Regex to check for exactly 10 digits
    if (phone === "" || !phoneRegex.test(phone)) {
        phoneErr.textContent = "Please enter a valid 10-digit phone number.";
        isValid = false;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (pass === "" || !passwordRegex.test(pass)) {
        passErr.textContent = "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character.";
        isValid = false;
    }

    if (confirmPass === "" || confirmPass.length < 6) {
        confirmPassErr.textContent = "Please enter a password with at least 6 characters.";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
        return true;
    }
    else {
        return false;
    }
}


function clearErrorOnKey(inputId, errorId) {
    const inputField = document.getElementById(inputId);
    const errorField = document.getElementById(errorId);

    inputField.addEventListener("keydown", function (event) {
        if (inputField.value.trim() === "") {
            errorField.textContent = "";
            inputField.classList.remove("invalid"); 
        } else if (event.key === "Backspace") {
            errorField.textContent = ""; 
            inputField.classList.remove("invalid"); 
        }
    });
}

clearErrorOnKey("first_name", "error_first_name");
clearErrorOnKey("last_name", "error_last_name");
clearErrorOnKey("email", "error_email");
clearErrorOnKey("phone", "error_phone");
clearErrorOnKey("password", "error_password");
clearErrorOnKey("confirm_password", "error_confirm_password");