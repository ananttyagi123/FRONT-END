// ternary operator -----------------------------------------------------------------------
// syntax 
// condition ? ifTrue : ifFalse ;
 //if the condition is present it console log the print value but if the value is false 
 // or undefined it console log the ifFalse statement
let me = "Anant" ;
let you = me ? "hello world" : "Good bye";
console.log(you)

let me1 ;
let you1 = me1 ? "hello world" : "Good bye";
console.log(you1)

// lets try anathor example ----------------------------------------------------------------
let soup = "chicken noodle soup"
let coustomerBanned = false 
// this state the the coustemer is banned or not
// the fase statement clearify that the coustomer is banned or not
// if soup is related to coustemerBanned then it will print no soup for you

soup = coustomerBanned ? "No soup for you" : `Here is your ${soup} sir `;
console.log(soup)

let score = 98;
let myGrade = score>90 ?  "A+" : score > 80? "A" : "F"
console.log(myGrade)
