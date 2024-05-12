"use strict";

import { burger, open } from "./burgerAccordion.js";
burger();
open();

import { moveTo } from "./moveto.js";
moveTo();

import { scrollTo } from "./scrollTo.js";
scrollTo();

import { formValidation, numberValidation } from "./formvalidation.js";
const form = document.getElementById("form");
form.addEventListener("submit", formValidation);

document
  .getElementById("phoneField")
  .addEventListener("keyup", numberValidation);

import {
  enter,
  closeOverlay,
  loginValidation,
  passwordValidation,
} from "./login.js";
enter();
closeOverlay();
loginValidation();
passwordValidation();

import {
  signup,
  closeOverlay2,
  signupValidation,
  newPasswordVis,
  repPasswordVis,
} from "./signup.js";
signup();
closeOverlay2();
signupValidation();
newPasswordVis();
repPasswordVis();

import { accordion } from "./burgerAccordion.js";
accordion();

import { filter, filter2 } from "./filter.js";
filter();
filter2();

import { currentYearFnc } from "./currentYear.js";
currentYearFnc();


