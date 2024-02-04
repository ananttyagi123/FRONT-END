// reduce method of an array-------------------------------------------------

// sum of all the numbers in an array ---------------------------------------

const number = [1,2,3,4,5];

const sum =number.reduce((accumulator,currentvalue)=>{
    return accumulator+currentvalue;
});
console.log(sum);

// accumulator    ,    currentValue    return value
//     1                   2                 3
//     3                   3                 6
//     6                   4                 10
//     10                  5                 15 

// the answer is 15 ----------------------------------------

const UserCart = [
    {Product: 1,Productname :"phone", price:1200},
    {product: 2,Productname:"Wallet",price:1100},
    {Product: 3,Productname:"pasta",price:1245}

]

const totalamount =UserCart.reduce((totalprice,currentPrice)=>{
    return  totalprice +currentPrice.price;
},0)

console.log(totalamount);

// total price          currentvalue      return 
//    o                {}.price value     1200
// 1200                ().price value     1300




