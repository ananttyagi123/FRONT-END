// indexing 
// for getting any element from the given string we use
// indexing
// we use .charAt(5)
// so it gives the value of the character or element at 5th position

let var1= "hello";
// the indexing in javascript is start from 0 
// not from 1
console.log(var1.charAt(0));
console.log(var1.charAt(1));
console.log(var1.charAt(2));
console.log(var1.charAt(3));
console.log(var1.charAt(4));
console.log(var1.charAt(5));

// so it will give the alue in console as ------------------------
// h
// e
// l
// l
// l 
// 0

// INDEXOF METHOD--------------------------------------------------------------------

 console.log(var1.indexOf("hel"));
 // so it gives the index as 0
 // but if we use ------------------------
 console.log(var1.indexOf("elo"))
 // so it gives the value as 1
 // because it combine the string "elo" 
 //as one 
 // so h=0, elo=1

 // SCLICE METHOOD-------------------------------------------------------------------
  console.log(var1.slice(5))
// it will give the value from 0 - 5
// but if we use ---------------
console.log(var1.slice(5,8))
// then it will console log the value from  6 -8
// but does,not include the value of 5

//UPPERCASE---------------------------------------------------------

// LOWERCASE------------------------------------------------------

console.log(var1.toUpperCase())
// the output will be HELLO

// nut if we use tolowercase

console.log(var1.toLowerCase())
// then it will give the value in console as 
// hello------------------------------------------------------------------------------------

// split method----------------------------------------------------------------------------

console.log(var1.split(""))
// then it will give the value as ["h" "e" "l" "l" "o"]