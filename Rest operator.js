const price =[10,20,30,40,50,60]
const total = price.reduce((a,b)=>a+b);
const Discounted= total*15;
const result= total-Discounted

console.log(result)