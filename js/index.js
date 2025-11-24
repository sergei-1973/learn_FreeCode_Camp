"use strict";

// const user = {
//     name: "Serija",
//     age: 52,
//     home: {
//         adress: "Kommynarov 32",
//         phone: "222-33-43",
//         car: "ford",
//     },
// };

// function isObject(obj) {
//     return typeof obj === "object" && !Array.isArray(obj) && obj !== null;
// }

// for (let prop in user) {
//     if (isObject(user[prop])) {
//         for (let secProp in user[prop]) {
//             console.log(user[prop][secProp]);
//         }
//     } else {
//         console.log(user[prop]);
//     }
// }

// function getVowelCount(sentence) {
//     const vowels = "aeiou";
//     let count = 0;

//     for (const char of sentence.toLowerCase()) {
//         if (vowels.includes(char)) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(getVowelCount("Hello, World!"));

// function getConsonantCount(sentence) {
//     const consonants = "bcdfghjklmnpqrstvwxyz";
//     let count = 0;

//     for (const char of sentence) {
//         if (consonants.includes(char)) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(getConsonantCount("Hello, World!"));

// function getPunctuationCount(sentence) {
//     let count = 0;
//     const punctuations = ".,!?;:-()[]{}\"'–";

//     for (let char of sentence) {
//         if (punctuations.includes(char)) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(getPunctuationCount("What's going on here?"));

// function getWordCount(sentense) {
//     if (!sentense || sentense.trim().length === 0) {
//         return 0;
//     }

//     const words = sentense.trim().split(" ").length;
//     return words;
// }
// console.log(getWordCount("Hello world"));

// function factorialNum(num) {
//     let result = 1;

//     while (num) {
//         result *= num--;
//     }
//     return result;
// }
// console.log(factorialNum(6));

// function mutation(arr) {
//     let oneElement = arr[0].toLowerCase();
//     let secondElement = arr[1].toLowerCase();

//     for (let char of secondElement) {
//         if (!oneElement.includes(char)) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(mutation(["hello", "hey"]));

// function chunkArrayInGroups(arr, num) {
//     let result = [];

//     for (let i = 0; i < arr.length; i += num) {
//         let chunk = arr.slice(i, i + num);
//         result.push(chunk);
//     }
//     return result;
// }
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));

// let contacts = [
//     {
//         firstName: "Akira",
//         lastName: "Laine",
//         number: "0543236543",
//         likes: ["Pizza", "Coding", "Brownie Points"],
//     },
//     {
//         firstName: "Harry",
//         lastName: "Potter",
//         number: "0994372684",
//         likes: ["Hogwarts", "Magic", "Hagrid"],
//     },
//     {
//         firstName: "Sherlock",
//         lastName: "Holmes",
//         number: "0487345643",
//         likes: ["Intriguing Cases", "Violin"],
//     },
//     {
//         firstName: "Kristian",
//         lastName: "Vos",
//         number: "unknown",
//         likes: ["JavaScript", "Gaming", "Foxes"],
//     },
// ];
// function lookUpProfile(name, prop) {
//     const funcContacts = [...contacts];

//     let foundContact = null;

//     for (let i = 0; i < funcContacts.length; i++) {
//         if (funcContacts[i].firstName === name) {
//             foundContact = funcContacts[i];
//             break;
//         }
//     }

//     if (!foundContact) {
//         return "No such contact";
//     }

//     if (foundContact.hasOwnProperty(prop)) {
//         return foundContact[prop];
//     } else {
//         return "No such property";
//     }
// }
// console.log(lookUpProfile("Kristian", "lastName"));

// ГЕНЕРАТОР ПИРАМИД

// function pyramid(pattern, rows, isUpsideDown) {
//   let result = "\n";

//   if (isUpsideDown) {
//     // Пирамида вершиной вниз
//     for (let i = rows; i > 0; i--) {
//       const spaces = " ".repeat(rows - i);
//       const patterns = pattern.repeat(2 * i - 1);
//       result += spaces + patterns + "\n";
//     }
//   } else {
//     // Пирамида вершиной вверх
//     for (let i = 1; i <= rows; i++) {
//       const spaces = " ".repeat(rows - i);
//       const patterns = pattern.repeat(2 * i - 1);
//       result += spaces + patterns + "\n";
//     }
//   }

//   return result;
// }
// console.log(pyramid("*", 4, true));

// function getAverage(arrTest) {
//   let sum = 0;
//   for (let i = 0; i < arrTest.length; i++) {
//     sum += arrTest[i];
//   }
//   return sum / arrTest.length;
// }

// function getGrade(ball) {
//   if (ball === 100) {
//     return "A+";
//   } else if (ball >= 90) {
//     return "A";
//   } else if (ball >= 80) {
//     return "B";
//   } else if (ball >= 70) {
//     return "C";
//   } else if (ball >= 60) {
//     return "D";
//   } else {
//     return "F";
//   }
// }

// function hasPassingGrade(score) {
//   return getGrade(score) !== "F";
// }

// function studentMsg(scores, studentScore) {
//   const average = getAverage(scores);
//   const grade = getGrade(studentScore);
//   const passed = hasPassingGrade(studentScore);

//   let message = `Class average: ${average}. Your grade: ${grade}. `;

//   if (passed) {
//     message += "You passed the course.";
//   } else {
//     message += "You failed the course.";
//   }

//   return message;
// }
// console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));

// function titleCase(str) {
//   let arr = str.split(" ");
//   let result = "";
//   for (let i = 0; i < arr.length; i++) {
//     result += arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1) + " ";
//   }
//   return result;
// }
// console.log(titleCase("Hello world"));

// function bouncer(arr) {
//   let result = [];

//   for (let i of arr) {
//     if (i) {
//       result.push(i);
//     }
//   }
//   return result;
// }
// console.log(bouncer([]));

// let inventory = [
//   {
//     name: "serija",
//     quantity: 52,
//   },
//   {
//     name: "yasya",
//     quantity: 52,
//   },
// ];
// function findProductIndex(productName) {
//   const searchName = productName.toLowerCase();

//   for (let i = 0; i < inventory.length; i++) {
//     if (inventory[i].name.toLowerCase() === searchName) {
//       return i;
//     }
//   }
//   return -1;
// }
// console.log(findProductIndex("fedya"));

// function addProduct(product) {
//   let productFound = false;

//   for (let i = 0; i < inventory.length; i++) {
//     if (inventory[i].name === product.name) {
//       inventory[i].quantity += product.quantity;
//       console.log(`${product.name} quantity updated`);
//       productFound = true;
//       break;
//     }
//   }

//   if (!productFound) {
//     inventory.push(product);
//     console.log(`${product.name} added to inventory`);
//   }
// }
// addProduct({ name: "FLOUR", quantity: 5 });

// function removeProduct(productName, quantity) {
//   productName = productName.toLowerCase;
//   const index = findProductIndex(productName);

//   if (index === -1) {
//     // Продукт не найден
//     console.log(`${productName} not found`);
//     return;
//   }

//   const product = inventory[index];

//   if (product.quantity < quantity) {
//     // Недостаточно товара
//     console.log(
//       `Not enough ${product.name} available, remaining pieces: ${product.quantity}`
//     );
//     return;
//   }

//   // Вычитаем количество
//   product.quantity -= quantity;
//   console.log(`Remaining ${product.name} pieces: ${product.quantity}`);

//   // Если количество стало 0, удаляем продукт
//   if (product.quantity === 0) {
//     inventory.splice(index, 1);
//   }
// }

// function uniteUnique(...arrs) {
//   let result = [];

//   for (let arr of arrs) {
//     for (let item of arr) {
//       if (!result.includes(item)) {
//         result.push(item);
//       }
//     }
//   }
//   return result;
// }
// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

// import { generatePassword } from "./generatePassword.js";
// console.log(generatePassword(8));
