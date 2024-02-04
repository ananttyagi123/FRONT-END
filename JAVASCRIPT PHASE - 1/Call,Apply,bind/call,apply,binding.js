// call apply binding-------------------------------
// if you want  to call any function you can call it by 
// function name.call()

function hello(){
    console.log("hello world we are here!");  
}

hello.call();

const user1 = {
    firstname: "anant",
    age:18,
    about:function(){
        console.log(this.firstname , this.age)
    }
}
user1.about();

// how to borrow a function from one data to anathor data object ---------------

const user2 = {
    firstname:"pickchu",
    age:18
}

// how to call about function in the user2 if it not present in it 
user1.about.call(user2,"surprise");
// you can also add extra stuff using a comma after


// then this give us --------------------- my name is pikachu age 2

// store extra element in array type
// Apply is also equal to the call() but it can take extra argument as in group - ["brother,1232"]


// const me = user1.bind(1,3,4,"Anant");
// me()

