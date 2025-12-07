function calcularConsumo(){
    let elementoTextoKm = document.getElementById('textoKm');
    let km = elementoTextoKm.value;
    let cantKm = Number(km);

    let cantLitros = cantKm / 8.8;

    let elementoTexto = document.getElementById('textoResultado');
    elementoTexto.textContent = "Carga " + cantLitros + " litros de conbustible";
}