const movies= {
    title : "john wick",
       showMovie(){
           console.log("check this",this.title);
       },
};
console.log(movies.showMovie())

// ................................................................////////////////// it is for outside function
movies.rating = function showRating(){
    return "check rating",this;
};
// console.log("check this rating",movies.rating());............................................ it is for normal function


function checkThis(){
    return this;
}
console.log(checkThis());
//..................................................................................


function SomeFunction(x){
    this.abc=x;
    this.ranks=[1,2,3,4,5];
    this.draw= function(){
        this.ranks.map(
            function(items){
                return console.log(items===1 ? this:0);

            }.bind(this)
        );
    };
}
const output = new SomeFunction(10);
console.log(output.draw());

///// .....Arrow function....//////

// //  this.ranks.map((koibhi))=>{
//     return console.log(items===1 ? this:0)
