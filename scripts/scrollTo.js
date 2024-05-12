"use strict";

export function scrollTo() {
  let icon = document.getElementById("scrollTo");

  icon.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
}
