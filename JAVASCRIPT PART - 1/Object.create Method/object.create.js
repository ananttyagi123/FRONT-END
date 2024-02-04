// Object.create Method--------------------------------------------------------------------------------------

// functionn that create multiple  objects 
// adding key-value pair
// object ko  return krega
const userMethods = {about : function(){
    return `${this.firstname} is ${this.age} years old`
},
    sing:function(){
     return `hello and Welcome!`
    }
  }

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
      user.about = userMethods.about;
      user.sing = userMethods.sing;
      // for returning the value
      return user;
  };
  // assign the vakuees foro the above variable
  const user1 = createuser("harshit","tyagi","ananttyagi@234",18,"shantavihaving har");
  // this below function will call the user function valure and after that return the value of 
  // about key object in the form of function aas given above with the help of userMethod
  
  console.log(user1.about());
  console.log(user1.sing());

// add a method for the user multiple type 
// if you want ti take thw key value of other object in ypur object without adding it or writing it
// if it is present in one object then it will tale the value whren call with tthe help of Object.create

const obj = {
    key1:"value1",key2:"value2"
}

const obj2 = Object.create(obj);
obj.key2 = "value3---"
console.log(obj2.key2)

// in this Object.create 
// when a object us calling anathor object key value then first it willl check
// if the value is present in his own object or not
// if not then it will chw=ech in the object that you put in () in Object.create
