// Sets (it is iterable)
// stoore data
// set also have is own method
// no index based acess 
// unique item only no duplicates


/* const number = [1,2,3,4]  -------- ARRAY*/  

// Sets
const number1 = new Set(1,2,3);
console.log(numbers);

/* the major diffrence in set and array is that set cannot take repeat or duplicate value */
/* in set we cannot access the value of set by the use of indexing just like array */

const numbers = new Set();
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add("items");
// but it cannot take the value of 3 in repeat
numbers.add(3);
numbers.add("items");

// but in array we can repeat in array due to its diffrenet memory adress in the sense of js
numbers.add(["items1","items2"]);
numbers.add(["items1","items2"]);
// it will repeat due to diffrent memory allocation----------------------------

// SETS ARE USED FOR UNIQUE IDENTITY FOR EXAMPLE - USERID

// getting uniue element from an array 

const Array = [1,1,2,2,3,3,5,7,5,7,8,8,9,3,3];
const convert = new Set(Array);
console.log(convert);
