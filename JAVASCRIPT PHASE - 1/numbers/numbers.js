// an integer is a whole number
// am=nd a number in decimal point is a float
const mice = "56abcs"
let mice2 = 677.343
console.log(mice === mice2)


// it gives the value as false -----------------------------------------------------------

// number method -------------------------------------------------------------------------

// we can change the string  datatype to number datatype by using "Number"

console.log(Number(mice))
 // so now ------------------------------------------------------------------------------
 console.log(Number(mice)+mice2) // so it will give the value 733
 console.log(Number(true))  // 1
 console.log(Number(false)) // 0


// the number.isInteger()method determine weather the value is passed in an integer or not
console.log(Number.isInteger(mice))

// and gives tthe value as true or false


// the number.phrasefloat() number parses an argument and return a floating point number if a number
// cannot be passed from the argument it gives NaN
// it return that the value is floating point or not

// in the form of true or False
console.log(Number.parseFloat(mice));
// if the var mice = "56abds" it only returns // 56-----------------------------------

// the Tofixed method formats a number according to how many decimal number
// can be provided to your parameter

// .Tofixed(6) // where 6 denites the number of value after decimal points

console.log(Number.parseFloat(mice2).toFixed(1)) 
// then it will give the value as  // 66.2-------------------------------------------
// note that this method give the string data--------------------------------------

// CHAINING --------------- using several mehod and chained together----------------

// NaN

// the Number.isNan method() determine weather the passing value is NaN and its type is number
// whereas NaN is an acronym which is called as not a number

console.log(Number.isNaN("Dave"))

// but is we use only Nan ----------------------------
// not a number----------------------------------------

// isNan() method------------------------------------------------------------------------------
console.log(isNaN("green"))  // true
console.log(isNaN(45))       // False



