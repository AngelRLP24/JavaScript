let miArray = [1, 2, 3, 4, 5];
let suma = 0;

function miFor(){
    for(let numero of miArray){
        suma+=numero
        document.write(suma + "<br>");
    }
}