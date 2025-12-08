let misCalificaciones = [5, 6, 7, 3, 5, 6, 8];

function mostarNotas(){
    let elementoLista = document.getElementById('listaCalificaciones');

    for(let nota of misCalificaciones){
        let lista = document.createElement('li');
        lista.innerText = nota;
        elementoLista.appendChild(lista);
    }
}

function promedio(){
    let textoResultado = document.getElementById('textoResultado');
    let sumaTotal = 0;

    for(nota = 0; nota < misCalificaciones.length; nota++ ){
        sumaTotal += misCalificaciones[nota];
    }

    let promedioFinal = sumaTotal / misCalificaciones.length;

    textoResultado.textContent = promedioFinal;
}

function notaMayor(){
    let textoResultado = document.getElementById('textoResultado');

    let notaMayor = 0;
    let vuelta = 0;

    while (vuelta < misCalificaciones.length) {
        if (notaMayor <= misCalificaciones[vuelta]) {
            notaMayor = misCalificaciones[vuelta];
        }
        vuelta++;
    }

    textoResultado.textContent = notaMayor;
}

function aplazoNota(){
    let textoResultado = document.getElementById('textoResultado');

    let aplazo = "No";
    let vuelta = 0;

    do{
        if (misCalificaciones[vuelta] < 4) {
            aplazo = "Si";

            break;
        }

        vuelta++;
    }while( vuelta < misCalificaciones.length );

    textoResultado.textContent = aplazo + " Hay Aplazo"
}