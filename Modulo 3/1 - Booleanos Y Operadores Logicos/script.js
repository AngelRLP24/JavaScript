function validar(){
    let elementoEdad = document.getElementById('textoEdad')
    let edad = elementoEdad.value;

    let elementoRespuesta1 = document.getElementById('textoRespuesta1');
    let elementoRespuesta2 = document.getElementById('textoRespuesta2');
    let elementoRespuesta3 = document.getElementById('textoRespuesta3');

    let puedeBeber = edad >= 18;
    elementoRespuesta1.textContent = puedeBeber;

    let entrarFiesta = edad >= 18 && edad <= 30;
    elementoRespuesta2.textContent = entrarFiesta;

    let entraGratis = edad == 20 || edad == 25;
    elementoRespuesta3.textContent = entraGratis;
}