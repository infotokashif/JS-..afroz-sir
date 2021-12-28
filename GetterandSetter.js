// const person ={
//     firstName:"Abc",
//     lastName:"xyz",

//     get naamdo(){
//         return `Naam hai ${person.firstName} ${person.lastName}`
//     },

//     set naamdo(value) {

//         const parts =value.split(" ")
//         this.firstName= parts[0];
//         this.lastName=parts[1];
//     }
// };

// person.naamdo= "kashif ahmad"
// console.log(person.naamdo);



const person=
    {
        firstname:"kashif",
        lastname:"ahmad",

      get  getfullname(){
            return `name:${this.firstname}  surname: ${person.lastname} `
        },
        set getfullname(anything){
            const spillted= anything.split(" ")
            this.firstname= spillted[1];
            this.lastname= spillted[0];


                
        }
    }
    person.getfullname="amjad shaikh";
    console.log(person.getfullname);

























