 // Arrow function ----------------------------------------

// Arrow function doesn't have with .this keyword-------------------------------------

const user1 = {
    firstname:"anant",
    age:8,
    about: () => {
        console.log(this) // in the arrow function the this keyword is become a window object
        // it will give the undefined value when call() by a function
    console.log(this.firstname , this,age);

    // the output will be undefined
    }
}