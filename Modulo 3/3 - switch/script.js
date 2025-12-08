function validarPrecio(){
    let elementoFruta = document.getElementById('textoFruta');
    let fruta = elementoFruta.value;

    let textoRespuesta = document.getElementById('textoResultado');

    switch (fruta) {
        case '1':
            textoRespuesta.textContent = "$25.72"
            break;
        case '2':
            textoRespuesta.textContent = "$15.50"
            break;
        case '3':
            textoRespuesta.textContent = "$35.48"
            break;
        case '4':
            textoRespuesta.textContent = "$30.99"
            break;
        case '5':
            textoRespuesta.textContent = "$26.55"
            break;
    }
}