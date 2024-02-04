// default Parameters ------------------------------------------------------------

// default paramer=ter are used to set the value by default without passing the value

// for example -----

function me2(a,b,c){
   return  a+b+c ;
}

me2(3,5,7)
console.log(me2(3,5,7));

// but if we wanted to add a default and don't want to give the parameter of a particular 

function me3(a,b=9){
    return a+b;
}
console.log(me3(4,6))
// we don't assign the value of b but it bydefault take the vakue of b as 0


