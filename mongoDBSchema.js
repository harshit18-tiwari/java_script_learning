// import mongoose from 'mongoose';

// const userSchema = new mongoose.Schema(
//     {
//         name
//     }
// )

console.log("Welcome")
console.log("We learn Node js")
// Question--> 1
let a = "Harry";
let b = 6;

console.log(a+b);

//Ques-->2
console.log(typeof(a+b));
const c = {
    name:"Harshit",
    section :1,
    isPrinciple:false
}
// c=56
// objects cannot be changed but the value inside object can be changed, key and value can be changed as c is reference to the object
// ques--4
c['friend'] = "Shubam"
console.log(c);
console.log(c.name)

const age = 18;
if(age>=18) {
    console.log("valid")
}