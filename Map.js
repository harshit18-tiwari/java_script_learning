const map = new Map();
map.set('IN',"India")
map.set('USA',"United States Of America")
map.set('Fr',"France")

// console.log(map);
//map contains unique value
//example of for-of loop--
let arr = [1,2,3,4,5]
for(const k of arr ){
    console.log(k); 
}

for(const [key,value] of map) {
    // console.log(key,':-',value);//destructuring of array
}

// const myObject ={
//     'game1' :'NFS',
//     'game2' : 'SpiderMan'
// }

// for(const [key,value] of myObject) {
//     console.log(key,':-',value);
// }//yeh object p kaam nhi kr rha h
//map is not iterable for (for-in) loop / we use for-of loop
//for objects -- for-in loop

const myObject ={
    js:'javascript',
    cpp:'C++',
    rb: 'ruby',
    swift:'swift by apple'
}

//to iterate on bject we have for-in loop
for (const key in myObject) {
    // console.log(key);//for key
    // console.log(myObject[key]);
    // console.log(`${key} shortcut for ${myObject[key]}`);
}
//if we use for-in loop for array then it will give key as output
//while for-of loop gives values

//for-each loop
const coding = ["js","ruby","cpp","java"];

// coding.forEach( function (items) {
//     console.log(items);
// })

coding.forEach( (items) => {
    // console.log(items);
})

// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
    // console.log(item.languageFileName);
} )