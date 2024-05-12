"use strict";

const storageType = localStorage;
const consentPropertyName = "jdc_consent";

const shouldShowPopup = () => storageType.getItem(consentPropertyName);
const saveToStorage = () => storageType.setItem(consentPropertyName, true);

window.onload = () => {
  const consentPopup = document.getElementById("consent-popup");
  const consentButton = document.getElementById("consent-button");

  const acceptFnc = (event) => {
    saveToStorage(storageType);
    consentPopup.classList.add("hidden");
  };

  consentButton.addEventListener("click", acceptFnc);

  if (shouldShowPopup(storageType)) {
    consentPopup.classList.add("hidden");
  }
};
