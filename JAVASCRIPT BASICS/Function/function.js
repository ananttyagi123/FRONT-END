// Javascript -----------------------------------------------------------------------------------

// function() --------------------------------------------------------------------------------
// we can create or define function -----------------------------------------

function ne() {
 return 2+2;
}
console.log(ne())  // 4

// Function Deceleration syntax :

function sun(value1,value2){
  return 2+1;
  if(value2===undefined) ;
 }
console.log(sun(1)); // so it will give the value2 undefined ---------------------------
function GetUserName(email){
return email.slice(0,email.indexOf("@"));
}
console.log(GetUserName("Ananttyagi@gmail.com"))

// we create a sum variable by using the function

function hello(num1,num2){
  return num1 + num2;
}

// then declare the value of variable

const returning = hello(4,5);
console.log(returning);

