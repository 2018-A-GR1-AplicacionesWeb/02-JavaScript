console.log('Hola mundo');
var mutar;
var nombre = 'Adrian';
mutar = nombre;
var edad = 28;
mutar = edad;
var peso = 305.1;
mutar = peso;
var casado = false;
mutar = casado;
var fechaNacimiento = new Date();
mutar = fechaNacimiento;
var noExisto = null; // false
var noEstoyDefinido = undefined; // false
// 0 false 1 true -1 true
// cmd + a = seleccionara
// cmd + alt + l = indentar
if (noExisto) {
    console.log('Verdadero');
} else {
    console.log('Falso');
}

// Json
// Objetos!
var usuario = {
    "nombre": "Adrian",
    apellido: "Eguez",
    cedula: 'Eguez',
    edad: 28,
    edadAlCuadrado: potenciaDeDosDeUnNumero(this.edad),
    imprimir: function () {
        console.log(this.nombre + ' ' + this.apellido + ' ' + this.edad);
    }
};
usuario.imprimir();


console.log(usuario.nombre); // "Adrian"
console.log(usuario);
delete usuario.edad;
console.log(usuario);
usuario.fechaNacimiento = new Date();
console.log(usuario);
usuario.mascotas = {};
usuario.mascotas.nombre = "Adrian";
console.log(usuario);
var arreglo = [
    1,
    "Adrian",
    true,
    undefined,
    usuario.imprimir,
    usuario.imprimir(),
    null,
    new Date(),
    {
        nombre: "Adrian"
    },
    [1, 2, 3, true]
];

function sumarNumeros(numeroUno, numeroDos) {
    return numeroUno + numeroDos;
}

console.log(sumarNumeros(1, 2));
console.log(sumarNumeros(1, 2.223));


var potenciaDeDosDeUnNumero = function noEsNecesarioPonerElNombre(numero) {
    return numero * numero;
};
// funciones anonimas
var potenciaDeDosDeUnNumeroDos = function (numero) {
    return numero * numero;
};

console.log(potenciaDeDosDeUnNumero(3, 23, 3, 4, 5, 2));
console.log(potenciaDeDosDeUnNumeroDos(2));








