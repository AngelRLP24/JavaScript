function estraerNumeroVenta(ventaNumero){
    let numeroId = document.getElementById(ventaNumero);
    let numeroEvaluado = numeroId.value;
    let numeroParseo = Number(numeroEvaluado);
    return numeroParseo;
}

function sumarVenta(){
    let venta_1, venta_2, venta_3, venta_4, venta_5, venta_6;

    venta_1 = estraerNumeroVenta('venta1');
    venta_2 = estraerNumeroVenta('venta2');
    venta_3 = estraerNumeroVenta('venta3');
    venta_4 = estraerNumeroVenta('venta4');
    venta_5 = estraerNumeroVenta('venta5');
    venta_6 = estraerNumeroVenta('venta6');

    let totalVenta = venta_1 + venta_2 + venta_3 + venta_4 + venta_5 + venta_6;

    let elementoTexto = document.getElementById('textoResultado');

    elementoTexto.textContent = totalVenta;
}