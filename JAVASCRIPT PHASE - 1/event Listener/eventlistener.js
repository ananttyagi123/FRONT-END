const veiw = document.querySelector("section");
const div = div.querySelector("div");
const h1 = h1.querySelector("h1");

// syntax of an event listener ----------------------------------------------

// addEventListener("click",function(),usercapture)

const dosomething = () => {
    alert("doing Something");
};

h1.addEventListener("click", dosomething ,false);

// to remove an eventListener we can use this -----------------------
// .remove method
//h1.removeEventListener("click",dosomething,false)
