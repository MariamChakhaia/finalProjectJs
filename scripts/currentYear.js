"use strict";

export function currentYearFnc() {
  const currentYear = new Date().getFullYear();
  const copyrightNotice = document.getElementById("copyright");

  copyrightNotice.innerText = `© ${currentYear} Courses. All rights reserved.`;
}

currentYearFnc();
