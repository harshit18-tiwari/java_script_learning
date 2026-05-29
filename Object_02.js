// const tinder = new Object()// single ton object

const tinder = {}// non single ton object

tinder.id = "123abc";
tinder.name = "Sammy";
tinder.isLoggedIn = false;

// console.log(tinder);
//object inside object
const regularUser = {
    email : "harshit@email.com",
    fullname :{
        userfullname:{
            firstname:"harshit",
            lastname:"tiwari"
        }
    }
}

// console.log(regularUser.fullname.userfullname);


const obj1 = {1:"a" , 2:"b", 3:"c"};
const obj2   = {3:"a" , 4:"b"};
//to combine two objects
const obj3 = Object.assign({},obj1,obj2);//{}--target, obj1,2 -- source
//second method -- spread operator
const obj4 = {...obj1,...obj2};
console.log(obj3);
console.log(obj4);

// to acess the keys of objects
console.log(Object.keys(tinder))
console.log(Object.entries(tinder))
console.log(Object.values(tinder)) // now the return type is array now we can use loop for to acess any value   
console.log(tinder.hasOwnProperty('isLoggedIn'));// to check whether the object has this property or not

//************************************************************************************************************************************************************* */
//              DESTRUCTURING OF AN OBJECT

const course = {
    courname:"Js in Hindi",
    price:999,
    courseInstructor:"Hitesh"
}

const {courseInstructor:instructor} = course //destructuring
//course --> kha s value ko extract krna h
//courseInstructor --> jo key h uska name
//instructor --> new variable name(coureseInstructor ko ab hum instructor se access kr skte h)
console.log(instructor);
