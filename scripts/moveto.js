"use strict";

export function moveTo() {
    const moveTo = new MoveTo();
  
    let linkArray = document.querySelectorAll("a");
  
    linkArray.forEach((el) => {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        let sectionMove = document.querySelector(this.getAttribute("href"));
        moveTo.move(sectionMove);
      });
    });
  }