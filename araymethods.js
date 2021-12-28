// const arr =[10,20,30,40,50,60,70];
// pop method
// console.log(arr.pop());
// console.log(arr);

// push method-;

// console.log(arr.push(2));
// console.log(arr);

// shift and unshuft method...... shift method is opposite of pop method i.e first number remove


// console.log(arr.shift());
// console.log(arr);

// unshift method-;
//  in this method 1st position element add on it....  added element mention in *shif(here)*

// console.log(arr.unshift(0,5,5));
// console.log(arr);
// const arr =[10,20,30,40,50,60,70];
// // slice method;   in this first nd last element , last value not come, before 1st value of last index showing

// console.log(arr.slice(3,6));
// console.log(arr);

// splice method       in this method three parameter got, firstly starting index, 2nd removing index, 3rd shor how many add insted of removing index value.
// console.log(arr.splice(2,2,{value:1}));
// console.log(arr);


// indexof method  //  ........   to check index of element by giving element value
// const newArr =[10,20,30,40,50,60,70];
// console.log(newArr.indexOf(40));

// inclueds method //..../ to check value we check is inside present or not....
// const newArr =[10,20,30,40,50,60,70];
// console.log(newArr.includes(60));


// fill method....it  is used to fill empty space , if use (3,1) than first value fill and 2nd value defined how many empty space frm 0 index take. and 3rd condition is also taken to show from where upto empty space taken after 

// const arr3 = new Array(20)
// console.log(arr3.fill());

//constructor method.../

//map method...
 //it is work in callback function in which we assign value of array to the ma
 
//  pped function "namrakho" and we give "namrakho"+10 means for each array element 10 number value add into this.
//const mapped =()=>{}
// const arr4 = [1,2,3,4,5,6,7,8];
// const mapped = arr4.map((namrakho)=>namrakho+100);


// // multiline function given below
// const mapped = arr4.map((namrakho)=>{
//     return namrakho*2+1
// // });
// console.log(mapped);

//filter method ....//// in this method filter is add to short element by there value i.e  greater than, less than , price value etc.

// const arr5 = [1,2,3,4,5,6,7,8];

// const filter = arr5.filter((elem)=>elem>4);
// console.log(filter);


// example

// const movies = [{title: "avengers", year:2019, rating:4.5, cat:"action"},
//                 {title: "hitman", year:2015, rating:3.5,cat:"horror"},
//                 {title: "john wick", year:2017, rating:5,cat:"sceince"},
//                 {title: "Thor", year:2016, rating:1,cat:"action"},
//                 {title: "superman", year:2020, rating:5,cat:"horror"},
//                 {title: "justice leagua", year:2002, rating:4.4,cat:"action"},
// ];

// const filter = movies.filter((movi)=>movi.year<2020 && movi.rating<3);
// console.log(filter);

// reduce method....//

// acc=acumulator      cwr=current value.....if acc not assign any value than it is fixed on 1st value , and 2nd value add on it, depend on which function to be done as output.
// const nums = [10+20+30+40+50]
// const result = nums.reduce((acc,cwr)=>acc+cwr)
// console.log(result);

// 2nd condition. if we do multiply without assining acc value than multiply number(2) not do multiply with 1 number so first acc balue is 1 and final result is 289.... if want to assign acc value than add it into end of curly bracket with comma(,)...}0,1,2,3)

// const nums = [1,2,3,4,5]
// const result = nums.reduce((acc,cwr)=>{
//     return acc+cwr*10
// })

// console.log(result);

// for each method...

// const nums=[2,4,6,8]
// // const result=nums.forEach((elem)=>console.log("10" +elem));

// const output = nums.filter((elem)=>elem%2==0).map((elem)=>elem+20).reduce((a,b)=>{
//     return a+b;
// });
// console.log(output);    
// it is for mapchaining problem

// every sum method...condition should apply to each elem of2 array otherwise its outpit will be false.....

// const result= nums.every((elem)=>elem>8);
// console.log(result);                                           
  


//some method    in this method if single elem condition is satisfied than output will be true...it is opposite to eversome method...... 

// const result = nums.some((kuchbhi)=>kuchbhi>5)
// console.log(result);


// joint method..../ it is used to join or ek jagah par array ki values ko laane ke liye use hota hai

// const arr = ["j","o","h","n"]
// console.log(arr.join(""));

//contact method... in this method two  array elem add or merge or attach and output will available in array..

// const arr1 = [1,2,3,4];
// const arr2 = [5,6,7,8];
// console.log(arr1.concat(arr2));

//reverse method... isme array ke elem opposite direction se index ki position le legi.

// console.log(arr1.reverse());

//sorting method.... incase of elem(number value) as per ASCI table than (b-a) show on disceding order, for 

const names= ["john", "simon", "peter", "tony"];    
console.log(names.sort((a,b)=>(a<b?1:-1)));




// factory Function = camelCase, keyName///
// constructor function= Pascal, Keyname///
