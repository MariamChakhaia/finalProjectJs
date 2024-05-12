"use strict";

export function burger() {
  let burger = document.getElementById("burger");
  let overlay = document.getElementById("navBar");
  let overlayLogo = document.getElementById("overlayLogo");

  burger.addEventListener("click", function () {
    this.classList.toggle("open");
    overlay.classList.toggle("active");

    overlayLogo.src = "./images/Logo.png";
    overlayLogo.classList.add("overlayLogo");
  });
}

export function open() {
  let links = document.querySelectorAll(".links");
  let overlay = document.getElementById("navBar");
  let burger = document.getElementById("burger");
  links.forEach((el) => {
    el.addEventListener("click", function () {
      overlay.classList.remove("active");
      burger.classList.remove("open");
    });
  });
}

export function accordion() {
  let accordionArray = document.querySelectorAll(".accordion-container");

  accordionArray.forEach(function (item) {
    item.addEventListener("click", function () {
      this.classList.toggle("open");
    });
  });
}
