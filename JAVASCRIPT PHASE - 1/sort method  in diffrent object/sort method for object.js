

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
    user.about = function(){
        return `${this.firstname} is ${this.age} years old`
    };
    // for returning the value

 return user;
};
// assign the vakuees foro the above variable function--------------------------------------------------
const user1 = createuser("harshit","tyagi","ananttyagi@234",18,"shantavihar");
console.log(user1);

