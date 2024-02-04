// Important array methods -----------------------------

const number  = [1,2,3,4];

function multiply(number, index){
    console.log("index is", index);
    console.log(number*2);
    console.log(`${number}*2  = ${number*2}`); // so the output of the statement 
    /* is 4*2 = 8; */
    /* where the number is the variable  */
   
}

multiply(number[0],0);
multiply(number[1],1);
multiply(number[2],2);
multiply(number[3],2);  /* then it will give you NaN - means not a number */



// for loops ----------

// for(i = 0; i<number.length;i++){
//     multiply([i],i);
// }

/* we can also make the loop using  */

number.forEach(multiply);

number.forEach(function(number){
    console.log(number*3);
})


