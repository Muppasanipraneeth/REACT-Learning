function islegal(age:number){
    if(age>18){
        return true;

    }else{
        return false;
    }
}
const ask=islegal(19);
console.log(ask);
function runafter(fn:()=>void){
    setTimeout(fn ,5000);
}
runafter(()=>{
    console.log(" this is after the 10 seconds");
    
})