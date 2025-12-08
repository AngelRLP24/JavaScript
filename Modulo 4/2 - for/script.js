function generarTabla(){
    let elementoNumero = document.getElementById('textoNumero');
    let numeroTabla = elementoNumero.value;
    let numero = Number(numeroTabla);

    let elementoTexto = document.getElementById('listaTabla');

    for(x = 1; x <= 10; x++){
        let resultado = numero * x;
        let mensaje = numero + " por " + x + " es igual a: " + resultado;

        let lista = document.createElement('li');
        lista.innerText = mensaje;
        elementoTexto.appendChild(lista);
    }
}