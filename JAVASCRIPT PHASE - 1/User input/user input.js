// USER INPUT-------------------------------------------------------------------------------------
 // pop - ups

 // alert("")
 // it will give us the valuue as an alert when we open the page
 alert("hello Anant");

 //confirm()-----------------------------------------------------
let my_boolean = confirm("ok===true\ncancel===false");
console.log(my_boolean)
// so if we click ok itbb will give the value as true 
// if we click cancel it will give the value as false

//prompt()-------------------------------------------------------------
let me = prompt("Enter your name :")
// prompt() take an input from the user as-----------------------------
// console.log(me)
// and we get a null value if we press cncel and didn't input--------------
console.log(me ?? "you didn't enter your name")
// tthe newer way is that if you did'not fill the name is input it gives a message

// problem ----------------------------------------------------------------------------
// there is a problem is that if we are not put any value in input and click ok
// it will leave the console blank

// to resolve this problerm by if else statements -------------------------------------
let me1 = prompt("Enter your name :");
if (me1){
    console.log(me);
}
else{
    console.log("you didn't enter your name");
}
