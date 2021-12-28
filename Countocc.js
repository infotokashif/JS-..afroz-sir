// const empobj={};
// empobj 




const arr = ["a","b","c","a","c","d","b","a"];

// countOcc((arr));
console.log(countOcc(arr));
// arr value save in myArr  as a argument.

function countOcc(myArr){
  return myArr.reduce((acc,curr)=>{
      return acc[curr] ? (acc[curr]+=1) : (acc[curr]=1),acc
    //  last return function me -->,acc <-- hai q ke all value humko emoty object {} acc me dalna hai.


    //   pahle obj me null hai, so 
    // 1 obj a:1
    // 2 obj a:1 b:1
    // 3 obj a:1 b:1 c:1
    // 4 obj a:1+1=2 b:1 c:1
    // 5 obj a:2 b:1 c:2
    // 6 obj a:2 b:1 c:2 d:1
    // 7 obj a:2 b:2 c:2 d:1
    // 8 obj a:3 b:2 c:2 d:1
  },{})
}
