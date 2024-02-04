//     FETCH API
// FETCH , API requires a discussion of.......................
// call backs, promisis , venables , await/async

// callbacks 
//function firstfunction(parameters,callback){
    // do stuff
   // callback();
    // the call back allows us to make an fuction in a chain

//}
// it is also called callback hell


// promises are get rid of these callback() function hell
// first we need to do that why we need to move to promisis

// promises ----------------------------------------------------------------------------------------------------

// they can have 3 state

// pending , fulfilled ,Rejected  ------------------------------------------------------------------------------- 

// javascript is a asyncronous means doing onething at a time 
// so it means doing one thing at a time
// but promisis are like they are doib=ng some work when the other code will exicute

// so we are actually executing two code of blocks
// at a particular time

const Mypromise = new Promise((resolve,reject) => {
    const error = false;
  if(!error) {
    resolve("the value is resolved");}
    else{
        reject("No, rejecyed tthe promise");
    }
  }
);
console.log(Mypromise);



