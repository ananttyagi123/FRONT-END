// block or function scope---------------------------------------

// let and const are block scope 
// and var is function scope 

// block scope -------------------------------
// if you are assigning or let a variable in the block scope then you can only
// console the output only in the block

// for example-----------


// incorrect block statement

{
    let var1 = 45;
}
// console.log(var1);

// correct block statement----------------------

{
    let var2 = 45;
    console.log(var2);
}

// also in block scope we can assign the same variable with different value in differfirstent block

{
    let firstname = "Anant";
    console.log(firstname);
}


{
    let firstname = "Siddhartha";
    console.log(firstname);
}
//  the output will be Anant $ Siddhartha
