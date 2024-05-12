"use strict";

export function enter() {
  let loginBtn = document.getElementById("logIn");
  let overlay = document.getElementById("forUsers");

  loginBtn.addEventListener("click", function () {
    overlay.classList.add("active");
  });
}

export function closeOverlay() {
  let closeIcon = document.getElementById("xmark");
  let overlay = document.getElementById("forUsers");

  closeIcon.addEventListener("click", function () {
    overlay.classList.remove("active");
  });
}

export function loginValidation() {
  let formLogin = document.getElementById("forUsers");

  formLogin.addEventListener("submit", function (e) {
    e.preventDefault();
    let errors = {};

    let username = document.getElementById("usernameField").value;
    if (username === "") {
      errors.username = "Userame cannot be empty";
    }

    let password = document.getElementById("passwordField").value;
    if (password === "") {
      errors.password = "Password field cannot be empty";
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

    let checkBox = document.getElementById("saveUsername");

    if (checkBox.checked) {
      localStorage.setItem("usernameSaved", username);
    } else {
      localStorage.removeItem("usernameSaved");
    }

    if (Object.keys(errors).length === 0) {
      this.submit();
      formLogin.classList.remove("active");
    }

    let savedUsername = localStorage.getItem("usernameSaved");
    if (savedUsername) {
      document.getElementById("usernameField").value = savedUsername;
      document.getElementById("saveUsername").checked = true;
    }
  });
}

export function passwordValidation() {
  let visIcon = document.getElementById("icon1");
  let password = document.getElementById("passwordField");

  visIcon.addEventListener("click", function () {
    if (this.classList.contains("fa-eye")) {
      this.classList.replace("fa-eye", "fa-eye-slash");
      password.type = "text";
    } else {
      this.classList.replace("fa-eye-slash", "fa-eye");
      password.type = "password";
    }
  });
}
