function Construc(radius){
    this.radi=radius
    this.pi=3.14;
    this.area=function(){
        return this.pi*this.radi*this.radi
    };
    return this;
}
const circle1 = new Construc(10);
console.log(circle1.area());


// function Construct(radius){
//     this.radi=radius;
//     this.pi=3.14;
//     this.ranks=[2,4,6,8,10];
//     this.area= function(){
//         this.ranks.map(
//             function(elem){
//                 return console.log("check this is callbackfunction",this,elem)
//             }.bind(this)

//         );
//     };
//     return this;
// };

// const circle1= new Construct(15);
// console.log(circle1.area(2));





















