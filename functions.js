function add(a,b) {
    return a+b;
}

console.log(add(7,8));

function sub(a,b) {
    let result = a-b;
    return result;
}
result = sub(9,8)
// console.log(result);//both result is same
//agr koi value hi pass mt kro function ko call krte time and print krte time toh undefined aata h

//for making shopping card

function calculateCartPrice(...num1){
    return num1;
}
//... --> sometimes known as rest and sometimes spread
//val1,val2,...num1 --> first value - val1 , second-val2, rest will be num1
console.log(calculateCartPrice(200,400,500));