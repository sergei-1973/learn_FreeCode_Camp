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

function pyramid(pattern, rows, isUpsideDown) {
    let result = "";

    if (isUpsideDown) {
        // Пирамида вершиной вниз
        for (let i = rows; i > 0; i--) {
            const spaces = " ".repeat(rows - i);
            const patterns = pattern.repeat(2 * i - 1);
            result += spaces + patterns + "\n";
        }
    } else {
        // Пирамида вершиной вверх
        for (let i = 1; i <= rows; i++) {
            const spaces = " ".repeat(rows - i);
            const patterns = pattern.repeat(2 * i - 1);
            result += spaces + patterns + "\n";
        }
    }

    return result;
}
console.log(pyramid("*", 4, true));
