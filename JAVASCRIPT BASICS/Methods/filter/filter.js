/* filter Method for arrays */

const arr =  [1,2,3,4,5,6,7,8,9];
 
const isEven = function(number){
    return number%2==0;
}

 const Evenfilter = arr.filter(isEven);
 console.log(Evenfilter);


 const isOdd= function(number){
    return number%2;
}

 const Evenfilter1 = arr.filter(isEven);
 console.log(Evenfilter1);


