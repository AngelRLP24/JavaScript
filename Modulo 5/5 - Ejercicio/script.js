function crearElementos(elementoId, valorMinimo){
    let elementoP = document.createElement('p');
    let elementoLabel = document.createElement('label');
    let elementoInput = document.createElement('input');

    elementoLabel.textContent = elementoId + ": "
    elementoLabel.setAttribute('for', elementoId);

    elementoInput.setAttribute('id', elementoId);
    elementoInput.setAttribute('type', 'number');
    elementoInput.setAttribute('min', valorMinimo);
    elementoInput.setAttribute('max', 10);
    elementoInput.setAttribute('value', 0);

    elementoP.appendChild(elementoLabel);
    elementoP.appendChild(elementoInput);

    return elementoP;
}


function mostarElementos(contenedorId, valorMinimo, numeroElementos){
    let elementoContenedor = document.getElementById(contenedorId);

    for(item = 1; item <= numeroElementos; item++){
        let texto = "Calificacion " + item;
        let elementos = crearElementos(texto, valorMinimo);
        elementoContenedor.appendChild(elementos);
    }
}

function calcularNotas(contenedorId){
    let elementoContenedor = document.getElementById(contenedorId);
    let arrayNotas = [];
    let posicionElemento = 0;

    for(let elemento of elementoContenedor.children){
        let nota = extraerNota(elemento.children[1]);
        arrayNotas[posicionElemento] = nota;
        posicionElemento = posicionElemento + 1;
    }

    let promedioNotas = notasPromedio(arrayNotas);
    let mayorNota = notaAlta(arrayNotas);
    let menorNota = notaBaja(arrayNotas);

    for(let input of elementoContenedor.children){
        let nota = extraerNota(input.children[1]);

        input.children[1].className = 'normal';

        if (mayorNota == nota) {
            input.children[1].className = 'NotaMayor';
        }

        if (menorNota == nota) {
            input.children[1].className = 'NotaMenor';
        }
    }
    
    let elementoResultado = document.getElementById('textoResultado');

    elementoResultado.textContent = 'El Promedio de las Notas es: ' + promedioNotas
                                    + ' / La Nota Mayor es: ' + mayorNota
                                    + ' /La Nota Menor es: ' + menorNota;
}

function extraerNota(elemento){
    let notaValue = elemento.value;
    let notaParseada = Number(notaValue);

    return notaParseada;
}

function notasPromedio(array){
    let promedio = 0;

    for(let nota of array){
        promedio+=nota;
    }

    return (promedio / array.length).toFixed(2);
}

function notaAlta(array){
    let mayor = array[0];

    for(let nota of array){
        if (mayor <= nota) {
            mayor = nota;
        }
    }

    return mayor;
}

function notaBaja(array){
    let menor = array[0];

    for(let nota of array){
        if (menor >= nota) {
            menor = nota;
        }
    }

    return menor;
}