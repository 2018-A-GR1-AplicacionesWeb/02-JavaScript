console.log("Hola mundo");
let hola: number | string | boolean | any;
// let hola:any;
const adios = 'Adios';
hola = 1;
hola = '123';
// adios = 'asdasd';
// Duck typing

let nombre: string = 'Adrian';
let edad: number = 28.23;
let casado: boolean = false;
let fechaNacimiento: Date = new Date();

class Usuario {
    nombre: string;
    private casado: boolean;
    protected edad: number;

    constructor(nombre: string,
                casado: boolean,
                edad: number) {
        this.nombre = nombre;
        this.casado = casado;
        this.edad = edad;
    }
}

let vicente = {
    nombre: 'Vicente',
    casado: false,
    edad: 28
};
let adrian: Usuario = new Usuario('Adrian', false, 28);
console.log(adrian);
console.log(vicente);

class UsuarioDos {
    constructor(public nombre: string,
                private _casado: boolean,
                protected _edad: number) {
    }

    get casado() {
        return this._casado;
    }

    set casado(casado: boolean) {
        this._casado = casado;
    }

    imprimirUsuario(saludo: string): string {
        // Template Strings
        return `${saludo}. Mi nombre es ${this.nombre}, estoy casado ${this.casado}, mi edad es ${this._edad}`;
    }
}

let adrianDos = new UsuarioDos('Adrian', false, 28);
console.log(adrianDos.casado);
console.log(adrianDos.imprimirUsuario('Hola soy Goku'));

let carla: UsuarioTres = {
    nombre: 'ADrian',
    edad: 28,
    imprimir: function (saludo?: string) {
        return '';
    }
};

interface UsuarioTres {
    nombre: string;
    casado?: boolean;
    edad: number;

    imprimir(saludo?: string): string;
}
















