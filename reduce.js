// var numbers = [1,2,3,4,5,6];

// var sum = numbers.reduce((preValue, currValue) =>{
//     return preValue + currValue;
// }, 0);

// console.log(sum);


const list = [1,2,3,4,5,6];
let evenSum = list.reduce((acc, curr) => acc + (curr % 2 == 0 ? curr:0), 0);
console.log(evenSum);