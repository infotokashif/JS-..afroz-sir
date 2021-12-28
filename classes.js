class person{
    constructor(fname,lname){
        this.firstName= fname;
        this.lastname= lname;
    }
    greeting(){
        return `welcome ${this.firstName} ${this.lastname}` 
    }
}
const output= new person("john","wick");
console.log(output);
console.log(output.greeting());

class contact extends person{
    constructor(fname,lname,phone,city){
        super(fname,lname);
        this.phone= phone
        this.city=city;
    }   
    getContact(){
        return `phone: ${this.phone} city: ${this.city}`
    }
}
const output2= new contact ("John","carter","7774800944", "peer burhan");
console.log(output2);
console.log(output.greeting(),output2.getContact());
