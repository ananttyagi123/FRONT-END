// Methods
// function inside Object

const person = {
    firstName:"anant",
    age:2,
    about:function(){
        console.log(`my ${this.firstName} is ${this.age}`);
        /*  .this is used to retrive tthe information object and {} for variable */
    }
}
person.about();