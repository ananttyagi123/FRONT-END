// Map method ------------------------------------------

const number = [1,2,3,4,5];
const srare  = function(number){
    return number*number;
}

const sqarenumber = number.map(srare); 
/* map makes a diffrent array instead of the existing array */
console.log(sqarenumber);

/* the output will be stored as in an array */