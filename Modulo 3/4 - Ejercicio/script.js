function recomendarPelicula(genero) {
    let elementoEdad = document.getElementById('textoEdad');
    let edad = elementoEdad.value;

    let elementoRespuesta = document.getElementById('textoRespuesta');

    switch (genero) {
        case 'Comedia':
            if( edad < 13){
                elementoRespuesta.textContent = "El principito";
            } else {
                if ( edad < 16) {
                    elementoRespuesta.textContent = "Cars 2";
                } else {
                    elementoRespuesta.textContent = "Spider-man";
                }
            }
            break;
        case 'Drama':
            if( edad < 13){
                elementoRespuesta.textContent = "Bambi";
            } else {
                if ( edad < 16) {
                    elementoRespuesta.textContent = "Cars";
                } else {
                    elementoRespuesta.textContent = "El Capitan America";
                }
            }
            break;
        case 'Musical':
            if( edad < 13){
                elementoRespuesta.textContent = "La bella y la bestia";
            } else {
                if ( edad < 16) {
                    elementoRespuesta.textContent = "Blancanieves";
                } else {
                    elementoRespuesta.textContent = "Cenicienta";
                }
            }
            break;
        case 'Crimen':
            if( edad < 13){
                elementoRespuesta.textContent = "Chuky";
            } else {
                if ( edad < 16) {
                    elementoRespuesta.textContent = "It";
                } else {
                    elementoRespuesta.textContent = "Slender-man";
                }
            }
            break;
    }
}