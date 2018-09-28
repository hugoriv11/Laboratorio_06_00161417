
var summ = (array) => {
    if(array.length % 2 == 0){
        console.log("Arreglo par") 
    }
    for(i of array){
        let suma1 = array[i] + array[array.length-i]
    }
    return suma1;
}