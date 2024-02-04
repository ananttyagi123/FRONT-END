
// functionn that create multiple  objects 
// adding key-value pair
// object ko  return krega
// const userMethods = {about : function(){
//   return `${this.firstname} is ${this.age} years old`
// },
//   sing:function(){
//    return `hello and Welcome!`
//   }
// }

 // CREATE FUNCTION 
function createuser(firstname,lastname,email,age,address){
    // firstname, lastname email..... are the parameter for function
    // create a blanck object
    const user = {};
    user.firstname = firstname; // as a variable----
  //   user.key   = value  for dictionary-------'
    user.lastname = lastname;
    user.age = age;
    user.email = email;
    user.address = address;
    // for returning the value
    return user;
};
// assign the vakuees foro the above variable
const user1 = createuser("harshit","tyagi","ananttyagi@234",18,"shantavihaving har");
// this below function will call the user function valure and after that return the value of 
// about key object in the form of function aas given above with the help of userMethod
 
// USE OF PROTOTYPE
// we can now add the method in user prototype

createuser.prototype.about = function(){
  return "hello Protoype";
}

createuser.prototype.sing = function(){
  return "singing a song";
}

console.log(createuser.about)

