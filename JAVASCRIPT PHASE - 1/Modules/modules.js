// module is the method to export a paricular line of code to the other javascript file

// so we use module for export code the code to othe file

// for that we have to make two function

 export default function playguitar(){
  return "PLaying guitar"
}

const shreeding = () => {
  return "shreeding some liks!"
}

// exporting by default method ----------------------------------------------------------

//export default playguitar;

//  we can also use other methods-----------------------------------------------

export {shreeding};

// we can directly export the file in the line of code

export function gully() {
    return  "hello Module";
};

// we can aslo use only export method 

export const pluck = () =>{
    return "why you PLuck these flowers";
};

// we can import the files also 
// by import methods


