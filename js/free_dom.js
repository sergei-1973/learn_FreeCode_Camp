"use strict";
// const container = document.getElementById("container");
// const img = document.createElement("img");
// img.src = "https://cdn.freecodecamp.org/curriculum/cat-photo-app/lasagna.jpg";
// img.alt = "A slice of lasagna on a plate.";
// container.appendChild(img);

const passwordP = document.querySelector(".password");
const passwordText = document.querySelector(".passwordText");
import { generatePassword } from "./generatePassword.js";
const setPassord = setInterval(() => {
  passwordP.textContent = generatePassword(6);
  passwordText.value += passwordP;
}, 1000);

setTimeout(() => {
  clearInterval(setPassord);
}, 5000);
