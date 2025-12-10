function crearTienda(containerId, minimo, cantidad){
    let elementoContainer = document.getElementById('container');

    for(tienda = 1; tienda <= cantidad; tienda++){
        let texto = "Tienda " + tienda;
        let tiendaCreada =crearElementos(texto, minimo);
        elementoContainer.appendChild(tiendaCreada);
    }
}

function crearElementos(textoId, min){
    let elementoP = document.createElement('p');
    let elementoLabel = document.createElement('label');
    let elementoInput = document.createElement('input');

    elementoLabel.innerText = textoId + ": ";
    elementoLabel.setAttribute('for', textoId);

    elementoInput.setAttribute('id', textoId);
    elementoInput.setAttribute('type', 'number');
    elementoInput.setAttribute('min', min);
    elementoInput.setAttribute('value', 0);

    elementoP.appendChild(elementoLabel);
    elementoP.appendChild(elementoInput);

    return elementoP;
}

function estraerNumeroVenta(ventaNumero){
    let numeroId = document.getElementById(ventaNumero);
    let numeroEvaluado = numeroId.value;
    let numeroParseo = Number(numeroEvaluado);
    return numeroParseo;
}

function calcularVenta(){
    let arrayVentas = [];

    arrayVentas[0] = estraerNumeroVenta('venta1');
    arrayVentas[1] = estraerNumeroVenta('venta2');
    arrayVentas[2] = estraerNumeroVenta('venta3');
    arrayVentas[3] = estraerNumeroVenta('venta4');
    arrayVentas[4] = estraerNumeroVenta('venta5');
    arrayVentas[5] = estraerNumeroVenta('venta6');

    let totalVenta = sumarVerntas(arrayVentas);
    let mayorVenta = sacarMayorVenta(arrayVentas);
    let menorVenta = sacarMenorVenta(arrayVentas);

    let elementoTexto = document.getElementById('textoResultado');

    elementoTexto.textContent = totalVenta +
                                "/ Mayor venta: " + mayorVenta +
                                "/ Menor venta: " + menorVenta;
}

function sumarVerntas(array){
    let total = 0;

    for( let venta of array){
        total+=venta;
    }

    return total;
}

function sacarMayorVenta(array){
    let mayor = array[0];

    for(let venta of array){
        if (venta > mayor) {
            mayor = venta;
        }
    }

    return mayor;
}

function sacarMenorVenta(array){
    let menor = array[0];
    for(let venta of array){
        if (venta < menor) {
            menor = venta;
        }
    }

    return menor;
}