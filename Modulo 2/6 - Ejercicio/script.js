let numero1 = document.getElementById('textoNumero1');
let numero2 = document.getElementById('textoNumero2');
let elementoTexto = document.getElementById('textoResultado');

function mostarResultado(resultado) {
    return elementoTexto.textContent = resultado;
}

function sumar(){
    let suma = +numero1.value + +numero2.value;
    mostarResultado(suma);
}

function restar() {
    let resta = numero1.value - numero2.value;
    mostarResultado(resta);
}

function multiplicar() {
    let multiplica = numero1.value * numero2.value;
    mostarResultado(multiplica);
}

function dividir(){
    let divide = numero1.value / numero2.value;
    mostarResultado(divide);
}

function potenciar(){
    let potencia = Math.pow(numero1.value, numero2.value);
    mostarResultado(potencia);
}

function raiz(){
    let resultadoRaiz = Math.sqrt(numero2.value);
    mostarResultado(resultadoRaiz);
}

function absoluto(){
    let valorAbsoluto = Math.abs(numero2.value);
    mostarResultado(valorAbsoluto);
}

function random(){
    let num1 = Number(numero1.value);
    let num2 = Number(numero2.value);
    num1 = num1 + 1;
    let numeroRandom = Math.floor(Math.random() * (num1 - num2) + num2);
    mostarResultado(numeroRandom);
}

function btnRound() {
    let redondeo = Number(elementoTexto.textContent);
    mostarResultado(Math.round(redondeo));
}

function btnFloor(){
    let piso = Number(elementoTexto.textContent);
    mostarResultado(Math.floor(piso));
}

function btnCeil(){
    let techo = Number(elementoTexto.textContent);
    mostarResultado(techo)
}

function limpiar(){
    location.reload();
}