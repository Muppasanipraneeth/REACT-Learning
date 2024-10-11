// function isillegal (user:{
//     name:string,
//     age:number
// }){
//     if(user.age>18){
//         return true;
//     }else{
//         return false;
//     }
// }
// const sol=isillegal({
//     name:"praneet",
//     age:20
// })
// console.log(sol);
// for this their is an solution  called the interface
interface User{
    name:string,
    age:number,
    place:String,
    email?:String// this is optional 
}
function  isillegal(user:User){
console.log(`hello ${user.name}`);

}
isillegal(
    {
        name:"praneeth",
        age:20,
        place:"kurnool"
    }
);