const accoundID = 14453
let accountEmail = "harshit@google.com"
var accountPassword = "1234"
accountCity = "Agra"

// do not use var variable because of funcional scope and block scope

// if we do not assign the value to the variable in the js then it store undefined

// Data-types
// suse strict - treat all JS code as newer version

// number,bigint,string=>" ",boolean,null=>it is a stand alone value,undefined=> jb value define nhi k h,symbol,object
// null mtlb khali h

console.log(typeof("hites"));

// it give output an object
console.log(typeof null); 

// conversion -->
let number = "33"
console.log(typeof number);
let numberInValue = Number(number)
console.log(typeof numberInValue);

// NaN

//"33"=> 33
// "33abc" => NaN
// true => 1; false => 0

// operation
console.log("1"+2);
console.log(1+"2");
console.log(1+"2"+"2");
console.log("1"+2+2);
console.log(1+2+"2");

console.log("02">1);
console.log("2">1);//js automatically convert into js

console.log(null==0);
console.log(null>=0);//true
console.log(null>0);

// undefined always gives false on comparison with 0

// === check value along with datatypes

//datatypes --> primitive and non-primitive
// primitive --> call by value 
//there are 7 types of primitive-datatypes 
    //7 types : String,Number,Boolean,null,undefined,Symbol,BigInt

//Non-primitive--> reference 
    //Arrays,objects,function


const arr = ["harshit","raj"]
let obj = {
    name:"harshit",
    age:20
}

const myFunction = function() {
    console.log("Hello World");
}

// datatype of non-primitive is function and data-type of function is called object-function

//stack -- primotive , Heap -> non-primitive

//WE CANNOT GIVE NEGATIVE VALUE IN SUBSTRING BUT WE CAN DO THIS IN SLICE

//TRIM REMOVE THE STARTING SPACE AND ENDING SPACE

//arrays in js is re-sizeable

//shallow copy --> share the same refference
//deep copy --> do-not share the same refference

//arr.unshift(9) removes 9
//arr.shift() remove first element

let arr1 = [1,2,3,4,5]
let arr2 = arr1.join()

console.log(arr1);
console.log(arr2);//changes arr into string

//slice , splice

let arr3 = arr1.slice(1,3);
console.log(arr3);
console.log(arr1);
let arr4 = arr1.splice(1,4);
console.log(arr4);
console.log(arr1);

//slice doesnot affect the original value but spice change the original array

//to combine two or more operator we can use the flat operator
// if there is two or arrays inside the array then we flat-arr_name.flat(Infinity)

// to convert into array -- Array.from("Hitesh")
// to check that it is array or not --> isArray

console.log(Array.from({nsme:"Harshit"}))//it wiil not convert into array,it will give empty array

                                //OBJECTS


//single ton object --> when the object is made from constructor
//object literals --> not singleton

const js_user ={
    name:"Harshit",
    age:20,
    location:"agra",
    email:"harshit@google.com"

}

console.log(js_user.email);
console.log(js_user["email"]);

const object1 = {a:1, b:2,c:3,d:4}
const object2 = {e:5,f:6,g:7,h:8}
const object3 = Object.assign({},object1,object2)
console.log(object3);

//object has some function --> Object.keys(object_name)
        //Object.values(object_name)

//to check that object has this property or not we use Object.hasOwnproperty("isLoggesIN")

//                              FUNCTIONS


function sum(num1,num2) {
    console.log(num1+num2);
}

function diff2(num1,num2) {
        return num1-num2;
}

function check(num1,num2) {
    if(num1 > num2) {
        console.log("num1 is greater");
    }

    else {
        console.log("num2 is greater");
    }
}

function addOne(num) { //one way to make function
    return num+1; 
}

addOne(5)

const addTwo = function(num) {//another way to declare function by expression
    return num+2;
}
addTwo(5)

//                                      arrow function




