function crearTienda(containerId, minimo, cantidad){
    let elementoContainer = document.getElementById(containerId);

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

function extraerNumeroVenta(ventaNumero){
    let numeroEvaluado = ventaNumero.value;
    let numeroParseo = Number(numeroEvaluado);
    return numeroParseo;
}

function calcularVenta(){
    let arrayVentas = [];
    let posicionVenta = 0;
    let elementoContenedor = document.getElementById('container');

    for(let item of elementoContenedor.children){
        let valorVenta = extraerNumeroVenta(item.children[1]);
        arrayVentas[posicionVenta] = valorVenta;
        posicionVenta = posicionVenta + 1;
    }

    let totalVenta = sumarVentas(arrayVentas);
    let mayorVenta = sacarMayorVenta(arrayVentas);
    let menorVenta = sacarMenorVenta(arrayVentas);

    for(let input of elementoContenedor.children){
        let valorVenta = extraerNumeroVenta(input.children[1]);

        input.children[1].className = 'claseNeutro';

        if (mayorVenta == valorVenta) {
            input.children[1].className = 'inputMayorV';
        }

        if (menorVenta == valorVenta) {
            input.children[1].className = 'inputMenorV';
        }
    }

    let elementoTexto = document.getElementById('textoResultado');

    elementoTexto.textContent = totalVenta +
                                "/ Mayor venta: " + mayorVenta +
                                "/ Menor venta: " + menorVenta;
}

function sumarVentas(array){
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