// Gettera and Setters ------------------------------------------------------------------
class Person{
    constructor(firstname,lastname,age){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;}
 get fullname(){
    return `${this.firstname} ${this.lastname}`
 } }

 const person1 = new Person("anant","Tyagi",18);
 console.log(person1.fullname)




