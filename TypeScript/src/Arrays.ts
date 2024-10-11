function maxvalue(array:number []){
    let max:number=0;
    for (let index = 0; index < array.length; index++) {
        if(array[index]>max){
            max=array[index];
        }
        
    }
    return max;
}
console.log(maxvalue([1,2,3,4]));
