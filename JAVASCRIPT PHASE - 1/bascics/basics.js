// javascript --------------------------------------------------------------------------

// comments ----------------------------------------------------------------------------

// DATA TYPES -----------------------------------------------------------------------------

//  there are four types of datatypes in javascript we use regular ----------------------

// string--------------------------  " anything in double commas"

// int------------------------------ 335 445 4545

// string with integer ----------------------------------------------------------------

// if we concatinate string with datatypes it will convert integer into float datatype

//for example = 

let var1 = "hello World";
let var2 = 34;
var3 = var1 + var2 ;
console.log(var3)

// the output will be "hello World 34" as a string datatype-------------------------------

// we can also find that whaat type of datatype is 
// by using "typeof" method

// type =  typeof var3;
//  console.log(type)
  
 type =  typeof var3;
 console.log(type)
  
 // Boolean datatype ---------------------------------------------------------------------------------------

 // it may be in true or false statements---------------------------------------------

 // for example using comparison operator--------------------------------------------

var4 =  var1===var2 ;
console.log(var4) // so it is a false statement the console will give 
                // the output in console as false

// there are so many type of comparison operator

// ==== equal to -
// <=   - less than or eequal to -
// >= -   greater than or equal to 
 
// meassage on the page hello javascript using Alert

// alert------------------------------------

alert("hello Javascript");

// so it shows a message as hello jvascript when we open the page
 
// TYPE OF DATATYPES------------------------------------------------------------------------

console.log(typeof "hello Javascript")
console.log(typeof 45)
console.log(typeof 67.56)
console.log(typeof true)

// CONST OR LET ----------------------------------------------------------------------------

// if we want to reassign the value we use let 
// and if we don't want to re-assign the value we use const instead of let
// for taking a variable

// for example ------------------------------------

// if we completing a statement than we end the statement with ";"
// without it there will be an error

let hello =34;
const hello2 ="anant";
console.log(hello);
console.log(hello2);

// then re-assign tthe value of let 
 hello = "anant";
 console.log(hello);
 // but we don,t re-assign the value of const---------------

 // LENGTH  PROPERTY -------------------------------------------------------------------------------
 
 //for finding the length of any datatype we use 

 //.length at the end of variable
 // for examaple------------------------------------------------------------------------


 let mic = "hello Javascript";
 console.log(mic.length);
 // it shows that the length of tthe string is 16
 // it also include space 

 // lets try anathor method -----------------------------------

 console.log("hello Javascript  i am 18 years old".length);
 // it gives tthe length of the string present in the console 
 // which is 35

 
