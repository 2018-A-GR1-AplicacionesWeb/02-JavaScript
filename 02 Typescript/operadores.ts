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
        (acumuladoEdad: number, usuario: UsuarioArreglo) => acumuladoEdad + usuario.edad, 0
    );


let nuevoArregloDeUsuarios = arregloUsuarios
    .map( // el arreglo transformado o mutado
        (usuario: UsuarioArreglo) => {
            usuario.becado = false;
            return usuario;
        }
    )
    .map(
        (usuario: UsuarioArreglo) => {
            usuario.deuda = calcularDeuda(usuario.edad);
            return usuario;
        }
    )
    .filter(
        (usuario: UsuarioArreglo) => {
            return usuario.deuda < 50 // true, false
        }
    )

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

function calcularDeuda(edadUsuario: number) {

    const totalEdad = arregloUsuarios.reduce(
        (total,
         usuario: UsuarioArreglo) => total + usuario.edad,
        0
    );
    return totalEdad * (edadUsuario / 100);

}


interface UsuarioArreglo {
    nombre: string;
    edad: number;
    deuda?: number;
    becado?: boolean;
}




