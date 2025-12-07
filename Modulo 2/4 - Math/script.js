let elementoNumero = document.getElementById('textoNumero');
let elementoTexto = document.getElementById('textoResultado');

function btnRound(){
    return elementoTexto.textContent = Math.round(elementoNumero.value);
}

function btnFloor(){
    return elementoTexto.textContent = Math.floor(elementoNumero.value);
}

function btnCeil(){
    return elementoTexto.textContent = Math.ceil(elementoNumero.value);
}