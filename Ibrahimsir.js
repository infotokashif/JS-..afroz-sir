// find max number in two array
const arr1= [1,2,3,4]
const arr2= [5,6,7,8,9]

const sum= [...arr1,...arr2]


// console.log(Math.max(...sum));

// spread operator//

function sum1(a,b,...c){
    return(a+b+c)
}

console.log(sum1(1,3,4))