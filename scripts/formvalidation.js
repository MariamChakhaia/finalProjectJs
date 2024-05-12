"use strict";

export function formValidation(e) {
  e.preventDefault();
  let errors = {};

  let nameUser = document.getElementById("nameField").value;
  if (nameUser === "") {
    errors.name = "Name cannot be empty";
  }

  let surname = document.getElementById("surnameField").value;
  if (surname === "") {
    errors.surname = "Surname cannot be empty";
  }

  let email = document.getElementById("emailField").value;
  let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email === "") {
    errors.email = "Email cannot be empty";
  } else if (!email.match(emailPattern)) {
    errors.email = "Your Email is Invalid";
  }

  let phone = document.getElementById("phoneField").value;
  let numberPattern = /^(\+[1-9]{1}[0-9]{3,14})?([0-9]{9,14})$/;
  if (phone === "") {
    errors.phone = "Phone number cannot be empty";
  } else if (!phone.match(numberPattern)) {
    errors.phone = "Phone Number is Invalid";
  } 

  let course = false;
  this.querySelectorAll(".courseCheck").forEach((item) => {
    if (item.checked) {
      course = true;
    }
  });

  if (!course) {
    errors.course = "Select course";
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
    alert("You have been successfully registered. We will contact you very soon!")
  }
}

export function numberValidation() {
  let numberValue = document.getElementById("phoneField").value;
  let numberPattern = /^(\+[1-9]{1}[0-9]{3,14})?([0-9]{9,14})$/;
  let numberError = document.getElementById("error-phone");

  if (numberValue.match(numberPattern)) {
    numberError.innerText = "Your Phone Number is Valid";
    numberError.style.color = "green";
  } else {
    numberError.innerText = "Phone Number is Invalid";
    numberError.style.color = "red";
  }

  if (numberValue === "") {
    numberError.innerText = "";
  }
}
