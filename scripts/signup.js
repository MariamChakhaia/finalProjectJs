"use strict";

export function signup() {
  let signupBtn = document.getElementById("signUp");
  let overlay = document.getElementById("forNewUsers");

  signupBtn.addEventListener("click", function () {
    overlay.classList.add("active");
  });
}

export function closeOverlay2() {
  let closeIcon = document.getElementById("xmark1");
  let overlay = document.getElementById("forNewUsers");

  closeIcon.addEventListener("click", function () {
    overlay.classList.remove("active");
  });
}

export function signupValidation() {
  let formSignup = document.getElementById("forNewUsers");

  formSignup.addEventListener("submit", function (e) {
    e.preventDefault();
    let errors = {};

    let username = document.getElementById("newUsernameField").value;
    if (username === "") {
      errors.newUsername = "Userame cannot be empty";
    }

    let password = document.getElementById("newPasswordField").value;
    let repPassword = document.getElementById("repPasswordField").value;
    if (password === "") {
      errors.newPassword = "Password field cannot be empty";
    }

    if (password != repPassword) {
      errors.repPassword = "Passwords do not match";
    }

    let email = document.getElementById("newEmailField").value;
    let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email === "") {
      errors.newEmail = "Email cannot be empty";
    } else if (!email.match(emailPattern)) {
      errors.newEmail = "Your Email is Invalid";
    }

    this.querySelectorAll(".error-text").forEach((e) => {
      e.innerHTML = " ";
    });

    for (let item in errors) {
      let errorElement = document.getElementById("error-" + item);

      if (errorElement) {
        errorElement.innerText = errors[item];
      }
    }

    if (Object.keys(errors).length === 0) {
      this.submit();
      formSignup.classList.remove("active");
      alert(
        "You have been successfully signed up. Please check your Email for the verification code"
      );
    }
  });
}

export function newPasswordVis() {
  let icon2 = document.getElementById("icon2");
  let newPassword = document.getElementById("newPasswordField");

  icon2.addEventListener("click", function () {
    if (this.classList.contains("fa-eye")) {
      this.classList.replace("fa-eye", "fa-eye-slash");
      newPassword.type = "text";
    } else {
      this.classList.replace("fa-eye-slash", "fa-eye");
      newPassword.type = "password";
    }
  });
}

export function repPasswordVis() {
  let icon3 = document.getElementById("icon3");
  let newPassword = document.getElementById("repPasswordField");

  icon3.addEventListener("click", function () {
    if (this.classList.contains("fa-eye")) {
      this.classList.replace("fa-eye", "fa-eye-slash");
      newPassword.type = "text";
    } else {
      this.classList.replace("fa-eye-slash", "fa-eye");
      newPassword.type = "password";
    }
  });
}
