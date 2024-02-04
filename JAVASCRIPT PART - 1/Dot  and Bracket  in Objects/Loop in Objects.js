// Loop in Objects -------------------------------------------------------

// for in loop --------------------------

const Arr = {
    qwerty:"name",
    pica:"value",
    volume:"2",
}
// for geeting all the key from object using for loop


// so this will give you all the keys from the object ---------------

// for getting all the key values form a particular object name

for(let key in Arr){
    console.log(Arr[key]);
}

for(let key in Arr){
    console.log(`${key} : ${Arr[key]}`)
    // so it will give us key and value in objects----------------
}

