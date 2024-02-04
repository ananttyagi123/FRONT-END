// object 
// object are come in key-value pairs and those key value pairs are in he curly braces

const myObj = { name1 : "Anant Tyagi" };
console.log(myObj);

// accsesss the value of the key from an object ---------------------------------------------

console.log(myObj.name1);

// it gives us the value of the name1 key from myobj

//for big objects -----------------------------------------------------------

let largeobj = { 
    me:"Anant",
    age:18,
    course :"B.Tech(cse)",
    hello : ["qwerty","123",1,45,"goodMorning"]

    // nesting in Objects------------------------------------------------------
  ,  beverage : {
       drink  : "coffee",
    }
}
console.log(largeobj.age);
console.log(largeobj.sec);
console.log(largeobj.hello);

// if we want to acess only a particular element from an array which is present in the
//object
console.log(largeobj.hello[1]);
// so it will give you the 2 elen=ment from an array which is present in object

// we can use [] instead of . notation 


//  ------------------------------------------------------------------
// Action() method in Objects ----------------------------------------
// it can inlclude function ------------------------------------------



let on = {
    hello:"qwerty",
    me2 : "my cat",
    age:18,
    // action() method
   action:function() {
    return `"hello this is a ${this.me2}`;
    // this method is used for pull the value from an object
   }
};

console.log(on.action());

// inheretence -----------------------------------------------------------
// to give proccessesing the value of something into other defined object ----------------

// for example we create an object 
let inheretence = {
    work:"front-end",
    space:"vacume",
    age : 18,
    inhert :"Object",
    engine :function() {
        console.log("whroom");
    }
}
// now by the inheretenct method we can take the key-values of the object by defining in it 
// or createing an other object by create() method -

// Object.create() method can create an object --------------------------------------------

let inher= Object.create(inheretence);
// but we can also give the key-value to the created object---------------------
// for example 
//  created object.key=value; -----------------------------------------------------------------
inher.volume="456ml";
console.log(inher);
// so it give us an object {volume:456ml;}

// but it also give us the inhereted object key-values

console.log(inher.space)
// so the output is vaccume -----------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------

// object.keys(x);
// this method will give all the key of "x" object------------------

x= {
    hello : "belly",
    mic:23,
    mike:56,
    music:"guiter"
}
console.log(Object.keys(x));
// so it will give you -----------------
// hello,mic,mike,music ----------------- 

// object.values(x);
//
// this method will give you only the values of an object -------------------------

// HOW TO DELETE KEY-VALUE OR A PROPERTY FROM AN OBJECT ---------------------------

let property = {
    green:34,
     yellow:45,
     orange:12
}
console.log(property)

// but if we want to delete we use delete method

delete property.yellow;
// so it will delete the ye;;ow property from the object

console.log(property);

//HOW TO CHECK THAT THE PROPERTY IS PRESENT IN THE OBJECT OR NOT?
// by .hasOwnPropery() method
// it will answer in boolean type that the value is present or not
/// true or false

console.log(property.hasOwnProperty("yellow"));
// so it console.log() // false---------------------------------------------------------

//-----------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------

// destructuring Objects ------------------------


let band= {
    music:"peace",
    color:"green",
    name1:"Anant",
}
const { name1:myvariable , color:color1 } = band;
// so now it define the value of name1 key as my variable
// so if we console.log() the myvariable it will give me "Anant"

console.log(myvariable);
// this is called the destructuring of object