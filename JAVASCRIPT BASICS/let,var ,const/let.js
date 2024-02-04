// let var const ------------------------------------------------------------------------

var x = 1;
var x= 2;
console.log(x);
// var is re-assign so its value also be changed
 
// let is also re-assign the value ------------------------------------------

let y = 4;
y = 7;
console.log(y);
// so it is similar as var 

//// const -----------------------------------------------------------------------------------
const w= 34;
console.log(w);
// its value is fixed and cannot be re-assigned-----------------------

// it is diffrenet from var and let---------------------------------------

// scopes of let , var , const ---------------------

// global scope----------------------------------------------------------------

let a = 213;
var b = 345;
const c = 456;


// these three are global scope

{
    let e = 34;
    console.log(e);
}
// the variable in the curly braces are local variables

// Local scope ------------------------------------------------------------
function myfunc(){
 const z = 23;
 // the variable in the function is the local scope----------------------------
}
console.log(z);
