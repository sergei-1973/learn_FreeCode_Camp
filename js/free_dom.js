"use strict";
// const container = document.getElementById("container");
// const img = document.createElement("img");
// img.src = "https://cdn.freecodecamp.org/curriculum/cat-photo-app/lasagna.jpg";
// img.alt = "A slice of lasagna on a plate.";
// container.appendChild(img);

// const passwordP = document.querySelector(".password");
// const passwordText = document.querySelector(".passwordText");
// const passwordBtn = document.querySelector(".passwordBtn");
// const clearPassword = document.querySelector(".clearPassword");

// import { generatePassword } from "./generatePassword.js";

// passwordBtn.addEventListener("click", function () {
//   let count = 0;
//   const setPassord = setInterval(() => {
//     count++;
//     passwordP.textContent = generatePassword(8);

//     passwordText.textContent += ` ${count} - ${passwordP.textContent}; `;
//   }, 1000);

//   setTimeout(() => {
//     clearInterval(setPassord);
//   }, 5000);
// });
// clearPassword.addEventListener("click", function () {
//   passwordText.textContent = "Сгенерированный пароль:";
//   passwordP.textContent = "PASSWORD";
// });

// function changeImg() {
//   const img = document.getElementById("example-img");
//   img.src =
//     "https://cdn.freecodecamp.org/curriculum/responsive-web-design-principles/FCCStickers-CamperBot200x200.jpg";
//   img.alt = "CamperBot sticker";
//   console.log("image was just changed");
// }
// if (document.readyState === "loading") {
//   document.addEventListener("DOMContentLoaded", changeImg);
// } else {
//   console.log("DOMContentLoaded has already fired");
//   changeImg();
// }
