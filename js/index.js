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
// =======================================
// function sumAll(arr) {
//   if (arr.length !== 2) {
//     console.log("Уёбищный массив");
//     return;
//   }

//   let sum = 0;
//   let start = arr[0];
//   let end = arr[arr.length - 1];
//   if (start > end) {
//     start = arr[arr.length - 1];
//     end = arr[0];
//   }
//   for (let i = start; i <= end; i++) {
//     sum += i;
//   }
//   return `Общая сумма элементов: ${sum}`;
// }
// console.log(sumAll([10, 3]));

// function pairElement(str) {
//   let result = [];
//   const pairs = {
//     A: "T",
//     T: "A",
//     C: "G",
//     G: "C",
//   };
//   for (let i = 0; i < str.length; i++) {
//     const base = str[i];
//     const pair = pairs[base];

//     result.push([base, pair]);
//   }
//   return result;
// }
// console.log(pairElement("ATCGA"));

// function convertHTML(str) {
//   let newStr = "";
//   const sample = {
//     "&": "&amp;",
//     "<": "&lt;",
//     ">": "&gt;",
//     '"': "&quot;",
//     "'": "&apos;",
//   };
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     if (sample[char]) {
//       newStr += sample[char];
//     } else {
//       newStr += char;
//     }
//   }
//   return newStr;
// }
// console.log(convertHTML("Schindler's List"));
// // material palenight theme

// function sumFibs(num) {
//   if (num < 1) return 0;

//   let prev = 0;
//   let curr = 1;
//   let sum = 0;

//   while (curr <= num) {
//     // Если текущее число нечетное, добавляем к сумме
//     if (curr % 2 !== 0) {
//       sum += curr;
//     }

//     // Переходим к следующему числу Фибоначчи
//     let next = prev + curr;
//     prev = curr;
//     curr = next;
//   }

//   return sum;
// }
// console.log(sumFibs(1000));

// function dropElements(arr, func) {
//   for (let i = 0; i < arr.length; i++) {
//     if (func(arr[i])) {
//       return arr.splice(i);
//     }
//   }
//   return [];
// }
// console.log(
//   dropElements([1, 2, 3, 4], function (n) {
//     return n > 5;
//   })
// );

// function addTogether(first, second) {
//   // Если передано два аргумента
//   if (arguments.length === 2) {
//     // Проверяем, оба ли числа
//     if (typeof first === "number" && typeof second === "number") {
//       return first + second;
//     }
//     return undefined;
//   }

//   // Если передан один аргумент и он число
//   if (arguments.length === 1 && typeof first === "number") {
//     return function (next) {
//       // Проверяем, является ли следующий аргумент числом
//       if (typeof next === "number") {
//         return first + next;
//       }
//       return undefined;
//     };
//   }

//   // Во всех остальных случаях
//   return undefined;
// }
// ======================================================================
// import * as Hof from "./higher_order_functions.js";
// import { books } from "./books.js";

// function sortByYear(book1, book2) {
//   if (book1.releaseYear < book2.releaseYear) {
//     return -1
//   } else if (book1.releaseYear > book2.releaseYear) {
//     return 1
//   } else {
//     return 0
//   }

// }
// const filteredBooks = books.filter((book) => book.releaseYear > 1950)
// filteredBooks.sort(sortByYear)
// console.log(filteredBooks);

// function getIndexToIns(arr, num) {
//   arr.push(num)
//   arr.sort((a, b) => a - b)

//   return arr.findIndex(index => index === num)
// }
// console.log(getIndexToIns([20, 3, 5], 19));

// function diffArray(arr1, arr2) {
//   if (!arr1.length && !arr2.length) {
//     return [];
//   }
//   if (!arr1.length) return arr2;

//   if (!arr2.length) return arr1;

//   let result = arr1
//     .filter((element) => !arr2.includes(element))
//     .concat(arr2.filter((element) => !arr1.includes(element)));

//   return result;
// }
// console.log(diffArray([], []));
// =====================================================================
// import { destroyer } from "./destroyer.js";
// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
