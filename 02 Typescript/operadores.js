// operadores
var arregloNumeros = [1, 2, 3, 4, 5];
//let arregloUsuarios: Array<UsuarioArreglo> = [
var arregloUsuarios = [
    {
        nombre: 'Adrian',
        edad: 28
    },
    {
        nombre: 'Gabriela',
        edad: 10
    },
    {
        nombre: 'Felipe',
        edad: 68
    },
    {
        nombre: 'Wendy',
        edad: 32
    },
    {
        nombre: 'Roberto',
        edad: 18
    }
];
// fat arrow functions
var sumarDosNumeros = function (numeroUno, numeroDos) {
    return numeroUno + numeroDos;
};
console.log(sumarDosNumeros(1, 2)); // 3
var potenciaDeUnNumero = function (numero) {
    return numero * numero;
};
var potenciaDeUnNumeroV2 = function (numero) { return numero * numero; };
var sumarDosNumerosV2 = function (numeroUno, numeroDos) { return numeroUno + numeroDos; };
var sumaTotal = 0;
var resultadoForEach = arregloNumeros.forEach(function (valorActual, indiceActual, arreglo) {
    sumaTotal = sumaTotal + valorActual;
    console.log(valorActual);
    console.log(indiceActual);
    console.log(arreglo);
});
console.log(resultadoForEach);
console.log(sumaTotal);
var resultadoSumaConReduce = arregloNumeros
    .reduce(function (valorAcumuladoActual, valorActualArreglo) {
    console.log('valorAcumuladoActual', valorAcumuladoActual);
    console.log('valorActualArreglo', valorActualArreglo);
    return valorAcumuladoActual - valorActualArreglo;
}, 20);
console.log(resultadoSumaConReduce);
var resultadoEdadDeUsuarios = arregloUsuarios
    .reduce(function (acumuladoEdad, usuario) { return acumuladoEdad + usuario.edad; }, 0);
var nuevoArregloDeUsuarios = arregloUsuarios
    .map(// el arreglo transformado o mutado
function (usuario) {
    usuario.becado = false;
    return usuario;
})
    .map(function (usuario) {
    usuario.deuda = calcularDeuda(usuario.edad);
    return usuario;
})
    .filter(function (usuario) {
    return usuario.deuda < 50; // true, false
});
/*
.find(
    ()=>{

    }
)
.some( // every AND some OR = boolean
    (usuario:UsuarioArreglo)=>{
        return usuario.edad < 18 // true, false
    }
);
*/
console.log('nuevoArregloDeUsuarios', nuevoArregloDeUsuarios);
function calcularDeuda(edadUsuario) {
    var totalEdad = arregloUsuarios.reduce(function (total, usuario) { return total + usuario.edad; }, 0);
    return totalEdad * (edadUsuario / 100);
}
