// cloning using Object.assign --------------------------------------------------------------------

// memory --------------------

const obj = {"key1":123 ,"key2":345};

// for cloning we can also use spread operator --------------------

 const obj2 = {...obj};
 console.log(obj);
console.log(obj2);


// the Object.assign method
// we can learnt more about that in OOP (object oriented programming)
const obj3 = Object.assign({},obj);
console.log(obj3);
