// String concepts
// String methods
let str1 = "Hello";
let str2 = 'World';
let str3 = `Hello, ${str2}`; // Template literal (use backticks ` `)

// Basic properties and inspection
console.log("Length of str1:", str1.length);         // 5
console.log("First character of str2:", str2.charAt(0)); // "W"

// Case conversion
console.log("str1 to uppercase:", str1.toUpperCase());   // "HELLO"
console.log("str2 to lowercase:", str2.toLowerCase());   // "world"

// String concatenation
let combined = str1 + " " + str2;
console.log("Concatenated string:", combined);          // "Hello World"

// Includes and indexOf
console.log("str3 includes 'World':", str3.includes("World")); // true
console.log("Index of 'o' in str1:", str1.indexOf("o"));       // 4

// Slice and substring
console.log("Slice of str3 (7 to 12):", str3.slice(7, 12));    // "World"
console.log("Substring of str1 (1 to 4):", str1.substring(1, 4)); // "ell"

// Replace
console.log("Replace 'World' with 'JS':", str3.replace("World", "JS")); // "Hello, JS"

// Split
console.log("Split str3 by space:", str3.split(" ")); // ["Hello,", "World"]

// Repeat and trim
let exclaim = "Wow! ";
console.log("Repeated string:", exclaim.repeat(3)); // "Wow! Wow! Wow! "

let messy = "   Hello JS!   ";
console.log("Trimmed string:", messy.trim()); // "Hello JS!"

// Template Literal with Expression
let see = "srija";
let greeting = `Hi, ${see.toUpperCase()}!`; // Use backticks and ${} for expressions
console.log(greeting); // "Hi, SRIJA!"

let sports="cricket"
let dem="league"
console.log('i will play ${sports} everyday to select in tournment ${dem}')
let game="chess"
let chm="tournment"
console.log('play')


