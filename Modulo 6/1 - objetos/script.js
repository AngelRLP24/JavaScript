let perro1 = {
    nombre: 'Peluchin',
    raza: 'nose',
    edad: 9,
    ladrar(){
        console.log('Guauu');
    },
    saludar(){
        console.log('Hola me llamo ' + this.nombre);
    }
}

let gato = {
    nombre: 'Porfirio',
    color: 'Amarillo',
    edad: 2,
    maullar(){
        console.log('Miauu');
    },
    saludar(){
        console.log('Hola me llamo ' + this.nombre);
    }
}

function anioMas(){
    perro.edad = perro.edad + 1;
}

function colorOjosGato(){
    gato['colorOjos'] = 'cafes';
}

function Perro(){
    this.patas = 4;
    this.saludar = function(){
        console.log('Guauu');
    }
}

let pepe = new Perro();

function Empleado(nombre, apellido, edad, cargo){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.cargo = cargo;
    this.saludar = function(){
        console.log(`Hola me llamo, ${this.nombre} ${this.apellido}, tengo ${this.edad} años y mi cargo es ${this.cargo}`);
    }
}

let empleado1 = new Empleado('Luis', 'Pineda', 19, 'Chalan');