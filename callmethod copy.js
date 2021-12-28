
const countr = {
    country:"india",
    game:"cricket",

   
}
 function getdetail(ply1){
    return this.country+" "+this.game+" "+ply1
}
console.log(getdetail.apply(countr,["virat" +" "+"Rohit"]))