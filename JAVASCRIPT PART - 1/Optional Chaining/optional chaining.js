// optioal chaining ----------------------------------------------------------------


const object_chain = {
    firstname:"anant",
    address:{vill:'14334'}

};

console.log(object_chain?.address.vill);

// if the object is not is not  present then the console log object address value gives an error
// so to remove this we use .? if we use this it will not give error it will give the value as undefined in console 



