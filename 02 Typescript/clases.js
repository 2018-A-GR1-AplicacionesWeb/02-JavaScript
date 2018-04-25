console.log("Hola mundo");
var hola;
// let hola:any;
var adios = 'Adios';
hola = 1;
hola = '123';
// adios = 'asdasd';
// Duck typing
var nombre = 'Adrian';
var edad = 28.23;
var casado = false;
var fechaNacimiento = new Date();
var Usuario = /** @class */ (function () {
    function Usuario(nombre, casado, edad) {
        this.nombre = nombre;
        this.casado = casado;
        this.edad = edad;
    }
    return Usuario;
}());
var vicente = {
    nombre: 'Vicente',
    casado: false,
    edad: 28
};
var adrian = new Usuario('Adrian', false, 28);
console.log(adrian);
console.log(vicente);
var UsuarioDos = /** @class */ (function () {
    function UsuarioDos(nombre, _casado, _edad) {
        this.nombre = nombre;
        this._casado = _casado;
        this._edad = _edad;
    }
    Object.defineProperty(UsuarioDos.prototype, "casado", {
        get: function () {
            return this._casado;
        },
        set: function (casado) {
            this._casado = casado;
        },
        enumerable: true,
        configurable: true
    });
    UsuarioDos.prototype.imprimirUsuario = function (saludo) {
        // Template Strings
        return saludo + ". Mi nombre es " + this.nombre + ", estoy casado " + this.casado + ", mi edad es " + this._edad;
    };
    return UsuarioDos;
}());
var adrianDos = new UsuarioDos('Adrian', false, 28);
console.log(adrianDos.casado);
console.log(adrianDos.imprimirUsuario('Hola soy Goku'));
