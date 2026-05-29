"use strict" //-->treat all code as newer version

// let score = "33";
// console.log(typeof(score));

// let valueNumber = Number(score);
// console.log(typeof(valueNumber));

// console.log("1"+2+2);

// console.log(1+2+"2");

// let name = "Harshit Tiwari";
// console.log(name);

let name = "Harshit";
let age = 18
//STRING INTERPOLATION
// console.log(`My name is ${name} and age is ${age}`);

// console.log(name.__proto__);

// const hundreds = 10000000;
// console.log(hundreds.toLocaleString('en-IN'));// it will gives 0 according to the Indian standard

// //Maths Library

// //Date
// let myDate = new Date();
// console.log(myDate.toString());

//to use spread operator   

// let marvel_heros = ["IronMan","Hulk","SpiderMan"];

// let dc_heros = ["SuperMan","Flash","BatMan"];

// let new_arr = [...marvel_heros,...dc_heros];
// console.log(new_arr);

//Array.of-->

let a = 100;
let b = 200;
let c = 300;

// console.log(Array.of(a,b,c));
//using symbol
//declaring a symbol
const mySym = Symbol("key1");

//object literals
const Juser = {
    name:"Harshit",
    [mySym]:"myKey1",//we have to use square bracket to use symbol as key
    age:18,
    location:"agra",
    email:"harshit@google.com",
    isLoggedIn:false

}

//adding fn in objects
Juser.greeting = function(){
    console.log("Hello JS user");
}

Juser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);//this --> to the same object
}

console.log(Juser.greeting());
console.log(Juser.greetingTwo());

//accessing  the objects in both ways
// console.log(Juser.email);
// console.log(Juser["email"]);

// to use symbol as key 
// console.log(Juser[mySym]);
// console.log(typeof(mySym));//type--> symbol
//to change 
// Juser.email = "harshit.chatgpt.com"
//to not allow any chages
//then no changes will be applied
// Object.freeze(Juser);

const myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString);