// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

//we can create promise and consume the promise,but generally consume the promise
//to make promise --> const promise = new Promise()--> new method

//promise reduces the call back hell
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()//connecting resolve with .then, task completed successfully   
    }, 1000)
})
//.then is having connection with resolve
//consumption of promise
promiseOne.then(function(){
    console.log("Promise consumed");
})


//second method(without using variables)
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

//using data which can be come from db, voh hmne resolve m pass kr diya
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        //we pass object
        resolve({username: "Chai", email: "chai@example.com"})//resolve passes the value from here to .then
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

// ww can pass parmaters to the resolve

//error --> now we use reject
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true  //error h
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})
//chaining of then  --> to avoid callback hell
 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => { //upper then s jo value aayegi voh iss then m aayegi
    console.log(username);
}).catch(function(error){//to handle error
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});
//promise can be control from .then, catch() and from async and await also
//controlling promise with async, await 
async function consumePromiseFive(){//promise is an object
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()//response.jon convert hone m time leta h isliye awaits lgate h
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.