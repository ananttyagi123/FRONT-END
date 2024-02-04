// JSON _------------------------------------------------------------------------------

// JSON stands for java script Object Notation ---
// JSON is used to send or recieve data
// JSON is text format and completly language independent ---------------------
// meaning JSON is used to recive and send the  data in so many languages...
// not just in Javascript

let myobj = {name1:"Anant",arra:[1,2,3,4],num:12,
mics:function()
{   console.log("this is my function")}
}
console.log(myobj);

// when we console.log the object it shows us 
// array:(4),hello:f,name:'anant'
// it is not a proper uderstandable way to store data

// so we use JSON to send or recieve the exact data

let value_in_JSON = JSON.stringify(myobj);
// so it will give us tthe exact data in console.log()
console.log(value_in_JSON);

// this JSON will totally convert our object into string
console.log(typeof value_in_JSON)

// so it is now totally converted into string so
// we cannot tthe elements of JSON just like we did in object

// and it will not console the function it will discard the function

// parse property is used to convert an JSON into object or to recieve in console------------------------------------------------------

// if we want to recieve the console values we have to convert the JSON into objects
// but it will lost the function when we are convertong it from object to string
// so it will not console the functionthi
