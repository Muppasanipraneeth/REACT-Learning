// this about the types and the interface difference
type user={
    name:string,
    age:number,
    greet(phrase :string):void
}
interface user1{
    name:string,
    age:number,
    greet(phrase :string):void
}
//this is the major difference between the interface and the type is the type is used for the noraml purpose and the type is used with the classes


// the types let you do that 
type Greet=string |number;
function Greeting(id :Greet):void{
    console.log(id);
    
}
Greeting(1);
Greeting("praneeth")
// intersection 
type Employer ={
    name:string,
    startDate:Date

}
type Manger ={
    name:string,
    department:string
}
type Teamlead =Manger & Employer;
const teamlead:Teamlead ={
    name:"praneeth",
    department:"software dev",
    startDate: new Date()
}
console.log(teamlead);
