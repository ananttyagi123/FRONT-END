// primitivev and reference datatype 
// is we lwt a variable 
let num1 = 4;
let num2 = num1;
console.log("the value of num:",num1);
console.log("the value of num:", num2);
num1++ ;
console.log("the value of num1",num1);
console.log("the value of num2",num2);

// so in this tthe value of num2 is not increment due to primitive datatype
 
// but in --------
//reference datatype

let arr = [1,2,3,4,5,"Array1"];
let arr2 = arr;
console.log(arr);
console.log(arr2);

arr.push("Array mini");
console.log(arr);
console.log(arr2);
// so in this reference arr copy it to arr2
// this is due to because of reference array


// Spread Operator ---------------------------------------------------

let arrat = [1,2,3,4,5];

// spread operator is used as a copy or spreading the data in anathor data type
// or make clone but as a primitive datatype
let arrat2 = [...arrat];
console.log(arrat);
console.log(arrat2);
