// sorting -------------------------

//5,2,7,5,434,444------------

// sort in ascending - 2,3,7,434,444

const numbers = [5,6,7,8,9];
numbers.sort();
// expecting  - 5,6,7,8,9

console.log(numbers);
//but javascript convert the array element as string first 
// it sorting it as ASCII character value of particular array element

const username = ["sid","sanskaar","Anant","abc","qwerty"];
username.sort();
console.log(username);
// it willsort according to dictionary pattern for example as first the letter start with a,b,c,d 
// note that if "a" and "A" then capital "A" is sort or get first and then "a"


// remove the string sorting problem ------------------

const number1 = [5,9,1200,410,3000];
number1.sort((a,b) => {
         return a-b;
});

console.log(number1);



