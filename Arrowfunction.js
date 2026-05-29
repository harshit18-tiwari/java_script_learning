const user = {
    username:"Harshit",
    price:999,

    welcomeMessage:function() {
        console.log(`${this.username}, welcome to website`);
    }

}

//this always talks about the current context
//browser k andhar jo object h voh global object h, isliye vha console.log(this) empty nhi aata
//but yha p hmm console.log(this) krenge toh hmme empty hi milega, kyoki hmm node environment m h aur node environment m this empty objevt ko refer kr rha h, agr browser m kre toh window object milega   
//agr hmm kisi function k andhar yh kremge toh hmm bahut saari cheeje milengi


user.welcomeMessage();

// function chai() {
//     console.log(this);
// }
// chai()

// this can be used in Object

// let chai = ()=> {
//     console.log(this);
// }

// chai();

let sum = (a,b)=>{
    return a+b;
}

console.log(sum(8,9));

let sum1 =  (num1,num2)=> num1+num2;
console.log(sum1(5,6));

const add = (num1,num2) => (num1+num2)

let sum2 = (num1,num2)=>({name:"harshit"});// to return object
console.log(sum2(9,8));


//Immediately Invoked Function Expressions(IIFE)

(function chai() {
    //named IIFE
    console.log('DB CONNECTED');
})();

// two IIFE
( (name)=>{
    console.log(`DB CONNECTED TWO ${name}` );
})('hitesh')

//this browser k andhar this k value window object h


function chai(){
    let username = "harshit"
    console.log(this.username);//this will not work, it gives undefined as o/p
}

chai()
