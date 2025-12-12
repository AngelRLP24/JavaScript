let arrayEmpleados = [];

function btnGuardarEmpleado(){
    let nombre = evaluarInput('textoNombre');
    let apellido = evaluarInput('textoApellido');
    let edad = evaluarInput('textoEdad');
    let cargo = evaluarInput('textoCargo');

    let empleado = new Empleado(nombre, apellido, edad, cargo);

    arrayEmpleados.push(empleado);

    alert('Empleado Guardado Con Exito');

    limpiarInput();
}

function mostarListaEmpleados(){
    let listado = '';

    for(let empleado of arrayEmpleados){
        for(let propiedad in empleado){
            listado = listado + propiedad.toUpperCase() + ': ' + empleado[propiedad] + ', ';
        }
        listado = listado + '\n';
    }

    alert(listado);
}

function Empleado(nombre, apellido, edad, cargo){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.cargo = cargo;
}

function evaluarInput(elementoId){
    let elementoEmpleado = document.getElementById(elementoId);
    let elementoValue = elementoEmpleado.value;

    return elementoValue;
}

function limpiarInput(){
    document.getElementById('textoNombre').value = '';
    document.getElementById('textoApellido').value = '';
    document.getElementById('textoEdad').value = '';
    document.getElementById('textoCargo').value = '';
}