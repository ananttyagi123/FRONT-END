// Prototype ---------------------------------------------

function hello(){
    console.log("hello World");
};

console.log(hello.name);
// console the name of the hello() function 
// .name is a type of property to tell the name of the function 

// you can also make youe own property ------------------------

// hello.myOwnProperty = "vary unique";
// console.log(hello.myOwnProperty);


// function  provide us free space ---
// or it is called an {} - which is called a Prototype
// only function provide prototype property ---


if(hello.prototype){
    console.log("prototype is present")
}
else{
    console.log("prototype is present")
}

// how to add property to a prototype----


hello.prototype.abc = "abc";
console.log(abc.prototype);

/* so in this we made a prototye property abx  */