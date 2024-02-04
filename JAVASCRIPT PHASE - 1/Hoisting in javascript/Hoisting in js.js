// hoisting in Javascript ----------------------------------------

hello();
// we are calling a function before decleration but it is giving the output  

// but if wec are doing with declaring constant
// then it declare the error
const hell = function hello(){
    console.log("this is called Hoisting");
}
hello();