// dot and bracket in Objects ----------------

// we are using . for single object name 
// but we know that we can't space beetween object naming ------------
// for example 

let Array = {
    val : 1 , varl2 :3 , "person name" : "Anant Tyagi"
}

 // so if you want to get element from object 
 // you can simply get but if we use this get method for string having space we can use bracket 
 // instead of dot 

 console.log(Array.val);

 // so we use bracketv with inverted commas--------------------------------

 console.log(Array["person name"]);
