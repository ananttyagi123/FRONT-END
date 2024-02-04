// AND operator if both the value if true it gives true if
// one of the value is false it gives fase

// AND --------------------------------------------------------

let marks = 89;
let grade ;

if(marks >=90)
{
    grade="A";
}
else if(marks<=89)
{
    grade="B+";
}
else{
    grade= "-"
}
console.log(grade)
// so it will give the value of grade as per if else condition-------------------------

// lets try anathor if else condition----------------------------------------------------

let student = "Anant";
let mark = 98 
if(student == "Anant" && mark ==98){
    console.log("data is true")
}
else if (student =="pihu" && mark==87){
    console.log("data include error please fix it")
}
else{
    console.log("Not found")
}

// OR operator is uses when one of the statement is true 
//  it is denoted by ||
// it gives the true

let student1 = "Anant";
let mark1 = 98 
if(student == "pihu" || mark ==98){
    console.log("data is true")
}
else if (student =="pihu" || mark==87){
    console.log("data include error please fix it")
}
else{
    console.log("Not found")
}

