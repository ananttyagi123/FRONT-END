
// functionn that create multiple  objects 
// adding key-value pair
// object ko  return krega
const userMethods = {about : function(){
  return `${this.firstname} is ${this.age} years old`
}}
 // CREATE FUNCTION 
function createuser(firstname,lastname,email,age,address){
    // firstname, lastname email..... are the parameter for function
    // create a blanck object
    const user = {};
    user.firstname = firstname; // as a variable----
  //   user.key   = value  for dictionary-------
    user.lastname = lastname;
    user.age = age;
    user.email = email;
    user.address = address;
    user.about = userMethods.about;
    // for returning the value
    return user;
};
// assign the vakuees foro the above variable
const user1 = createuser("harshit","tyagi","ananttyagi@234",18,"shantavihaving har");
// this below function will call the user function valure and after that return the value of 
// about key object in the form of function aas given above with the help of userMethod

console.log(user1.about());

