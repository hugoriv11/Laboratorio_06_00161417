
var ocu = (num, array) => {
    let cont = 0;
    for(let i of array){
        if (i === num ) {
            cont += 1;
        }
    };
    if (cont === 0){
        console.log("No esta")
    }
    return cont;
};