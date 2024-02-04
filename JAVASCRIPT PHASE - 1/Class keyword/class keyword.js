// class keywoed -----------------------------------
// this is working assame as create functioon -------------

class createuser{
 constructor(firstname,lastname,age){
    this.firstname = firstname;
    this.lastname = lastname;
    this.age= age;}
    // you don't need to ake return type to get in class 
 about(){
        return "hellp My name is Anant"
     }
 }
 // defining method in the class ----------------
 // class keyword can't be invoke or call without "New" keyword
const classvalue = new createuser("anant","Tyagi",18);
console.log(classvalue.about());
console.log(classvalue.about());
////////////////////////////////////////////////