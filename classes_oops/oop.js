//in js there are classes but actually they are prototype behind the scene, as they are provided as syntetic sugar
//object --> collections of properties and methods

//parts of oop--
    //object literals
    //constructor function
    //prototypea
    //Classes
    //Instances(new,this)

//read by self --> 4 pillars of oops

const user = { //this is the object litterals
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){  
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}
//agr hm object m print krwayenge toh hmme object hi milega 
//agr object k bhr print krwaynege toh empty {} milega
//agr hm browser m console.log(this) krenge toh hmme window object milega 

//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


//new keyword is a constructor function
//ek hi object literals s multiple instance bna skte h
//new -- makes the new executional context

function User(username, loginCount, isLoggedIn){
    this.username = username; //RHS --> variable, LHS --> jo hmm arguement pass krte h
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false) // yha p user two n value ko overwrite kr diya,if we do not use user
console.log(userOne.constructor);
//constructor is the refference of User
//console.log(userTwo);