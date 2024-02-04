// array in js ------------------------------------------------------------------
// an array is like an shelf which contain string , integer , float , or boolean

const array1 = [1,2,3,4,5,6,"Anant Tyagi"];
console.log(array1)

const qwerty =[];

// adding element to an array ----------------------------------------------------------
qwerty[0] = "Anant";
qwerty[1]= 123;
qwerty[2]= "hello World!";
console.log(qwerty);

// length property;

console.log(qwerty.length);
// var.length property gives the no length of number element in an array

// Last Element of an array;

console.log(qwerty[(qwerty.length) - 1]);
// it gives the last element of an array----------------------------------------------

// add data to any array
// .push() method

qwerty.push("CSE");
console.log(qwerty);
// the push method added the value to the array 

// Unshift()
// unshift method added the element in an array at the first place

qwerty.unshift("qwerty");
console.log(qwerty);

// shift() method ----------------------------------------------------------------------------------

qwerty.shift();
// this blank shift method remove the last element from an array

// Deleting an array-------------------------------------------------------------------------

// for this we use delete 

delete qwerty[1];
console.log(qwerty);
// delete an element from an array
// so it gives an empty array

//splice() method -----------------------------------------------------------------------------

// this method was used when we want ot remove the element from an array------------------------------

qwerty.splice(1,1);
console.log(qwerty);
// if we use delete method it shows us that there is an empty element at the place of that element which was 
 // deleted 

 // but if we use splice method()
 // if completly remove the element from that array
  
 // replacing the element of an array by spliceing method()

 qwerty.splice(1,1,"Anant Tyagi");
 console.log(qwerty)

 // slice(2)
 // if we use splice(3);
// so it remove all the element from an array before 3
// for example ------------------------------------------------------------------------------------------------

 const me = qwerty.splice(2);
 console.log(me); 

 // slicing in array in javascript ---------------------------------------------------------------------------

 let deck = ["Anant","Tyagi","Age-18","B.Tech(CSE)"]
 let deck2 = deck.splice(1,3);
 // so it take the element from 1-3 but
 // it doesn,t include 3rd position element in it

 