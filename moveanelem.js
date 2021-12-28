// const arr=[10,20,30,40,50,60];

// function moveElem (array,index,offset);
// {
//     let newOffset = index+offset;
//     if(newOffset<0 || newOffset>=array.length);{
//      console.log("invalid offset")
//      return;
//     }
//     const output=[...array];
//     const removed = output.splice(index,1)[0];
//     console.log(removed);
//     output.splice(index+offset,0,removed);
//     console.log(output);

// },mp
const arr1= [1,2,3,4,5];
const arr2= [6,7,8,9,10];
const arr3= [11,12,13,14,15];

console.log([...[arr1],...[arr2],...[arr3]]);