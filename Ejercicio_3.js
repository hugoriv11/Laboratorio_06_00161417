
var tipo = (array) => {
    let numbr = 0;
    let stri = 0;
    for(let i of array) {
        let tyype = typeof(i);
        console.log(tyype)
        if(tyype === Number){
            numbr += 1;
        }
        if(tyype === String){
            stri += 1;
        }
    }
    return console.log("numbers:",numbr,"stings:",stri)
}