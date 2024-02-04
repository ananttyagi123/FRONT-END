// the web storage API is not a part of DOM
// it is a basically a window API
// available to JS via the global variable Window

// we donot have to type window it is implied



// it is exactly the same as we written it without

// window storage or session storage -----------------------------------------------------


const myobj = {
    name : "Dave",
    logName :function(){
    console.log(this.name)

    }
};
const myarray = ['eat','code','repeat'];

// session storage -------------------------------------------------------------------------
// it is the storage that when we console that data in the back we find out that
// after a particular session we when we close our session page/ or window 
// the data is no longer to be stored

// but in local storage we can retrieve our data so that when we have 
// we we reopen the tab it is not stored as an open tab
// so it can bee stored in our local storage and 
// we can retrieve that data after we close the tab or session
// this API is not attached to any open window or open tab

// --------------------------------------------------------------------------------------
 
localStorage.setItem("MyStorage",JSON.stringify(myarray));
const myLocalData = JSON.parse(localStorage.getItem("MyStorage"));
console.log(myLocalData);

// reterieve the data from the console.log()

// by the method of sesionstorage.getItem()



// so in the console we get object object type data 

// lets try with myarray ---------------------------------------------------------------

// so use my array
// so from this we get  the data 
// but it doesnot look like an array

// becaue we get the data in the form of an array 

// so with the help of API and JSON we can store an ideal data 

// so we use JSON.stringify()
// to collect or retrieve the ideal data


// -------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------

// removing the data from the local storage ---------------------------------------------

localStorage.removeItem("MyStorage");
// so this method remove the data from an API storage or local storage

// to clear all the local storage of web application we use 
// clear method

localStorage.clear();

// to get the diffrenet local storages we use 
//key method to get a paricular no of localStorage

localStorage.key(0);
// just like we are do in arrays indexing-----------------------------------------------------

// TO find out the LENGTH of Storage ----------------------------------------------------------------

const me = localStorage.length ;
console.log(me);
// so it will give you legth of the storage

