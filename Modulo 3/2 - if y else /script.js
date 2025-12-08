function validar(){
    let elementoPrecio = document.getElementById('textoPrecio');
    let precio = elementoPrecio.value;

    let elementoRespuesta = document.getElementById('textoRespuesta');

    if (precio < 5) {
        elementoRespuesta.textContent = "Compra Dos Cartones de Leche";
    } else {
        if (precio < 8) {
            elementoRespuesta.textContent = "Compra un Carton de Leche";
        } else {
            elementoRespuesta.textContent = "No Compres Nada";
        }
    }
}