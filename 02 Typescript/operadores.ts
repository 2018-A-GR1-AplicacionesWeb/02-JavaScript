// operadores

let arregloNumeros = [1, 2, 3, 4, 5];


//let arregloUsuarios: Array<UsuarioArreglo> = [

let arregloUsuarios: UsuarioArreglo[] = [
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
let sumarDosNumeros = (
    numeroUno: number,
    numeroDos: number): number => {
    return numeroUno + numeroDos;
};
console.log(sumarDosNumeros(1, 2));// 3

let potenciaDeUnNumero = numero => {
    return numero * numero;
};

let potenciaDeUnNumeroV2 = numero => numero * numero;

let sumarDosNumerosV2 = (
    numeroUno: number,
    numeroDos: number): number => numeroUno + numeroDos;

let sumaTotal = 0
let resultadoForEach =
    arregloNumeros.forEach(
        (valorActual, indiceActual, arreglo) => {
            sumaTotal = sumaTotal + valorActual;
            console.log(valorActual);
            console.log(indiceActual);
            console.log(arreglo);

        }
    );

console.log(resultadoForEach);
console.log(sumaTotal);

let resultadoSumaConReduce = arregloNumeros
    .reduce(
        (valorAcumuladoActual, valorActualArreglo) => {
            console.log('valorAcumuladoActual', valorAcumuladoActual);
            console.log('valorActualArreglo', valorActualArreglo);
            return valorAcumuladoActual - valorActualArreglo;
        },
        20
    );

console.log(resultadoSumaConReduce);

let resultadoEdadDeUsuarios = arregloUsuarios
    .reduce(
        (acumuladoEdad: number,
         usuario: UsuarioArreglo) => {
            return acumuladoEdad + usuario.edad;
        },
        0
    );


let nuevoArregloDeUsuarios = arregloUsuarios
    .map( // el arreglo transformado o mutado
        (usuario: UsuarioArreglo) => {
            usuario.deuda = 0;
            return usuario;
        }
    );

console.log('nuevoArregloDeUsuarios', nuevoArregloDeUsuarios);







interface UsuarioArreglo {
    nombre: string;
    edad: number;
    deuda?: number;
}












