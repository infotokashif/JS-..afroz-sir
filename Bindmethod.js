
const person={
    fname:"kashif",
    lname:"ahmad",


    getfullname:function(city){
        return this.fname+" "+ this.lname+" "+city
    }
}
getdetail= person.getfullname.bind(person,"umarkhed")
console.log(getdetail())
