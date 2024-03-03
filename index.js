// TypeError: toLowerCase is not a function in JavaScript

// EXAMPLE 1 - Only call the `toLowerCase()` method on strings

const num = 246;

const result1 = num.toString().toLowerCase();
console.log(result1); // 👉️ 246

const result2 = String(num).toLowerCase();
console.log(result2); // 👉️ 246

// ------------------------------------------------------------------

// // EXAMPLE 2 - Check if the value is a string before calling `toLowerCase()`

// const str = null;

// const result = typeof str === 'string' ? str.toLowerCase() : '';

// console.log(result); // 👉️ ""

// ------------------------------------------------------------------

// // EXAMPLE 3 - simple `if` statement

// const str = 1234567;

// let result = '';

// if (typeof str === 'string') {
//   result = str.toLowerCase();
// }

// console.log(result); // 👉️ ""

// ------------------------------------------------------------------

// // EXAMPLE 4 - Convert all strings in an array to lowercase

// const arr = ['A', 'B', 'C'];

// const result = arr.map(str => str.toLowerCase());

// // 👇️ ['a', 'b', 'c']
// console.log(result);

// // ------------------------------------------------------------------

// // EXAMPLE 5 - Access property on an object or an array element before calling `toLowerCase()`

// // ✅ Access object property before calling toLowerCase
// const obj = {
//   site: 'BOBBYHADZ.COM',
// };

// const result1 = obj.site.toLowerCase();
// console.log(result1); // 👉️ bobbyhadz.com

// // -------------------------------------------
// // ✅ Access an array element before calling toLowerCase

// const arr = ['BOBBY', 'HADZ', 'COM'];

// const result2 = arr[0].toLowerCase();
// console.log(result2); // 👉️ bobby
