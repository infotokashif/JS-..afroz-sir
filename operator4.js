
// premative type data 

// let x=10;
// let y=x;

// x=20;
// console.log(y);             
//  in this condition it is take its first value or its copy its value./////


// refrence example
//  in this case value change because of object value
let x=10;
let y=x;
x=20;
let obj1={value:10};
let obj2=obj1;
obj1.value=20;
console.log(obj2);