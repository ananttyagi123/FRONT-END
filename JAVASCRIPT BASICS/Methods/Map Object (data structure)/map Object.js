// map is iterable
// store data in odered function 
// store key value pair (like object)
// duplicate keys are not allowed

// diffrence between map and object
// object can only havestring or symbol as key

// in map you can use anything as key it may array , number , string 


// const person = {
//     firstname : "Anant",Age:18,
//     1:"one"
// };
// console.log(person.firstname);
// console.log(person["firstname"]);
// console.log(typeof(1));


// MAP -------------------
const person= new Map();
person.set('firstname',"anant");
person.set('Class','12');
person.set(1,"one");

// get the key-values by the get method in map
console.log(person.get("firstname"))
console.log(person.get(1));
console.log(person.keys());// gives all the keys present in Map