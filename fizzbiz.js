

//  1) through an error if not a valid number.
// 2) if the number is totally divisible by 3 & 5  --------->"fizzbizz"
// 3) if the number is totally divisible by 3 --------->"fizz"
// 4) if the number is totally divisible by 5 --------->"bizz"
// 5) if the number is none ------------->"not a fizzbiz number"

function fizzbiz(number){   
    if (typeof number=="name"){
        return "enter an valid input"
    }else if (number%3==0 && number%5==0){
        return "fizzbiz"
    }else if(number%3==0){
        return "fizz"
    }else if(number%5==0){
        return "bizz"
    }else { return "not a fizzbiz number"}
}
console.log(fizzbiz("5"));

























// function fizzbiz(num){
// if (typeof num=="name"){
//     return "not a valid input";
// }else if (num%3==0 && num%5==0){
//         return "fizzbiz"
//     }else if( num%3==0 ){s
//         return "fizz";
//     }else if (num%5==0){
//         return "bizz";
//     }else{
//         return "not a fizzbiz number";
//     }
// }
// console.log(fizzbiz(125));