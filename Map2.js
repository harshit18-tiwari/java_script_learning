// const coding = ['js','cpp', 'ruby', 'swift'];
// const vlaues = coding.forEach( (item) => {
//         console.log(item);
// })

// console.log(vlaues); for each loop does not return anything 


// const myNums = [1,2,3,4,5,6,7,8,9,10];
// //filter returns the value
// const newNums = myNums.filter( (num) => num > 4 )
// // or
// const newNums2 = myNums.filter( (num)=> {
//     return num>4
// })
// console.log(newNums2);


const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

// chaining 
const newNums = myNumers
                .map((num) => num * 10 )//iska result second chain m pass hoo jayega
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);
