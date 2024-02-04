// Code challenge 
// gives the random element forom my name
// by uing two methods 
// char() adding with floor and random method

console.log("Anant".charAt(Math.floor(Math.random()*5)+1));
// so ot will give as "A" "n" 'a'

// but it will give the indexing of only my number and 5  random place
// but we need a specific method() to determine the number of character
// we use .length after random()*any.length

const me = "Anant Tyagi";
console.log(me.charAt(Math.floor(Math.random()*me.length)))

