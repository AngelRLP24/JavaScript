let elementoTexto = document.getElementById('textoResultado');

function darRandom(){
    return elementoTexto.textContent = Math.floor(Math.random() * 11);
}
let elementoTexto2 = document.getElementById('textoResultado2');

function darRandom2(numeroMax, numeroMin){
    numeroMax = numeroMax + 1;
    let numeroRandom = Math.floor(Math.random() * (numeroMax - numeroMin) + numeroMin);
    return elementoTexto2.textContent = numeroRandom;
}