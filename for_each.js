let arr = [1,2,4,5,6];

arr.forEach(function(val) {
    console.log(val+5);
})


arr.forEach(function(val) {
    console.log(val-5);
})

//we use map, when we have to make new array, on the basis the of the data of the new array

// map returns the arr , we have to store the value in the new answer

let arr1 = [2,4,6,8,9];

let newarr = arr1.map(function(val) {
    return 12;
})

console.log(newarr)


let arr2 = [21,32,43,56,12];

let arr3 = arr2.map(function(val) {
    if(val>10) {
        return val;
    }
})

console.log(arr3)


// filter always return true or false, for each value in the array