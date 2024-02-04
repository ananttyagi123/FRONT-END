// math() methods and properties---------------------------------------------------------------------

// Math.PI --------------------------------
// it returns the value of pi = 3.14......

console.log(Math.PI);
// 3.141592 ----------------------------------------------------------------------------------

// Math.round(3.5) = 4

console.log(Math.round(3.5))
// it gives the round off value as  4

// Math.trunc()
// method remove all the decimal from the integer

console.log(Math.trunc(3.5))  // 3

// Math.ceil() mathod
// methods always gives the value as 
// as round off without checking it 
// for example if we use Math.ceil method on  4.2
// it gives the value as 5

console.log(Math.ceil(4.2))  // 4.2 = 5
console.log(Math.ceil(Math.PI))  // 3.14 = 4

// floor method -----------------------------------------------------------------
// floor method is also rounded off the value as same as trunc()
// without checking its decimal point-----------------------------

console.log(Math.PI) // 3

// Math.pow() 
 // this pow() method takes the two values as the base value and
 // the exponent value

 console.log(Math.pow(2,3))  
 // which is equal to the cube of 2 = 8
 //console.log(Math.min()) 
 // it provid3e the minimum value from the given numbers

 console.log(Math.min(2,4,8))
 // it gives the value as 2

 console.log(Math.max(4,5,9));
 // it givess the maximum value as 9

 // Math.random()-----------------------------------------------------------------------------------

 // ths methosd giives the value between 0 - 1
 // but if we modify the value by mutiplying iti with *4
 // then it gives the value between 0 - 4
 // but it doesnot include 4
 console.log(Math.random()*5)
// for rounding off the value by adding the floor() to it

