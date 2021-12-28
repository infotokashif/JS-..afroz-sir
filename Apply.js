const person={
    firstname:"kashif",


    getfullname: function(city,country){
        return this.firstname +" "+city+" "+ country
    }


}
const getdetail= person.getfullname

console.log(getdetail.apply(person, ["nanded","india",]))











