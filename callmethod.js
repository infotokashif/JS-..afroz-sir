const person={
    firstname:"john",
    lastname:"wick",

    getfullname: function(city,country){
        return this.firstname+" "+ this.lastname+" "+ city+" "+ country
    }
}
const getDetail = person.getfullname
console.log(getDetail.call(person, "umarkhed","india"))












