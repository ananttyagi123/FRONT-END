// types of scope in Javascript ----------------------------------

// lexical scope --------------------------------

function lexical(){
    const myvar ="Anant";
  function myfun2() {
     //   const myvar ="Tyagi";
        console.log("my function",myvar);
        // in lexical scope the javascript is first go to their own function to find
        // the declared variable
        // if it doesn't find it then it go to the outer function variable 
        // this is called lexical enviournment in javascript or lexical scope
        // and if it doesn't find then it will check it in global scope
    }

    console.log(myvar);
    myfun2();

}
lexical();