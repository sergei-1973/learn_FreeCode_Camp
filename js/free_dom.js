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


// ========АНИМАЦИЯ===========================
// const rect = document.getElementById('rect')
// let position = 0

// function update() {
//     rect.style.left = position + 'px'
//     position += 5

//     if (position > window.innerWidth) {
//         position = -rect.offsetWidth
//     }
// }
// function animate() {
//     update()

//     requestAnimationFrame(animate)
// }
// requestAnimationFrame(animate)
// const square = document.querySelector('#square');
// const playBtn = document.querySelector("#playBtn");
// const pauseBtn = document.querySelector("#pauseBtn");


// const animation = square.animate(
//     [{ transform: "translateX(0px)" }, { transform: "translateX(200px)" }],
//     {
//         duration: 5000,
//         // iteration: Infinity,
//         direction: 'alternate',
//         easing: 'ease-in-out'
//     }
// )
// // Set the onfinish property to log a message when the animation ends
// animation.onfinish = () => {
//     console.log("Animation finished!");
// };

// // Play the animation when the "Play" button is clicked
// playBtn.addEventListener("click", () => {
//     animation.play();
//     console.log("You start the animation");
// });

// // Pause the animation when the "Pause" button is clicked
// pauseBtn.addEventListener("click", () => {
//     animation.pause();
//     console.log("You pause the animation");
// });

// const canvas = document.getElementById("my-canvas");
// canvas.width = 300;
// canvas.heigth = 70;
// const ctx = canvas.getContext('2d');
// ctx.fillStyle = 'crimson';
// // ctx.fillRect(1, 1, 150, 100)
// ctx.font = '30px Arial'
// ctx.fillText('Hello HTML Canvas!', 1, 50)