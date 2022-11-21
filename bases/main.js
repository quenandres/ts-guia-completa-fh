"use strict";
(function () {
    var batman = 'Bruce';
    var superman = 'Clark';
    var existe = false;
    var parejaHeroes = [batman, superman];
    var villano = ['Lex Lutor', 5, true];
    var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    var Fuerza;
    (function (Fuerza) {
        Fuerza[Fuerza["aquaman"] = 0] = "aquaman";
        Fuerza[Fuerza["batman"] = 1] = "batman";
        Fuerza[Fuerza["flash"] = 5] = "flash";
        Fuerza[Fuerza["superman"] = 100] = "superman";
    })(Fuerza || (Fuerza = {}));
    var fuerzaFlash = Fuerza.flash;
    var fuerzaSuperman = Fuerza.superman;
    var fuerzaBatman = Fuerza.batman;
    var fuerzaAcuaman = Fuerza.aquaman;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    var poder = '100';
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
var sumar = function (a, b) {
    return a + b;
};
var contar = function (heroes) {
    return heroes.length;
};
var superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
var llamarBatman = function (llamar) {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
var unirheroes = function (personas) {
    return personas.join(", ");
};
var noHaceNada = function (number, texto, booleano, arreglo) { };
var noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
var batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
var bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar: function () {
        console.log("Disparando");
    }
};
var villanos = [{
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    }, {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    }, {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    }];
var charles = {
    poder: "psiquico",
    estatura: 1.78
};
console.log('charles');
console.log(charles);
var apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
var mystique;
mystique = charles;
mystique = apocalipsis;
(function () {
    var fullName = function (firstName, lastName, upper) {
        if (upper === void 0) { upper = false; }
        if (upper) {
            return firstName + " " + (lastName || '').toUpperCase();
        }
        else {
            return firstName + " " + (lastName || '');
        }
    };
    var name = fullName('Tony', 'true');
    console.log({ name: name });
})();
(function () {
    var fullName = function (firstName, lastName) {
        return firstName + " " + (lastName || '');
    };
    var name = fullName('Tony', 'Stark');
    console.log({ name: name });
})();
(function () {
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName);
    };
    var name = fullName('Tony', 'Stark');
    console.log({ name: name });
})();
(function () {
    var fullName = function (firstName) {
        var restoArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restoArgs[_i - 1] = arguments[_i];
        }
        return "".concat(firstName, " ").concat(restoArgs.join(' '));
    };
    var superman = fullName('Clark', 'Joseph', 'Kent');
    console.log(superman);
})();
(function () {
    var addNumbers = function (a, b) { return a + b; };
    var greet = function (name) { return "Hola ".concat(name); };
    var saveTheWorld = function () { return "El mundo esta salvado"; };
    var myFunction;
    var myFunction2;
    var myFunction3;
    myFunction = addNumbers;
    console.log(myFunction(5, 6));
    myFunction2 = greet;
    console.log(myFunction2('Albeiro'));
    myFunction3 = saveTheWorld;
    console.log(myFunction3());
})();
(function () {
    var hero = 'Flash';
    function returnName() {
        return hero;
    }
    var activeBatiSignal = function () {
        return 'Batiseñal activada';
    };
    console.log(typeof activeBatiSignal);
    var heroName = returnName();
})();
(function () {
    var flash = {
        name: 'Barry Alen',
        age: 24,
        powers: [1, 2],
    };
    var suoerman = {
        name: 'Clark Kent',
        age: 52,
        powers: [9, 5],
    };
})();
(function () {
    var flash = {
        name: 'Barry Alen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo', 'Rapida regeneración'],
    };
    var suoerman = {
        name: 'Clark Kent',
        age: 52,
        powers: ['Super velocidad', 'Super fuerza'],
        getName: function () {
            return this.name;
        }
    };
})();
(function () {
    var myCustomVariable = 'Test';
    console.log(typeof myCustomVariable);
    myCustomVariable = 10;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'aaaa',
        powers: [],
        age: 4
    };
    console.log(typeof myCustomVariable);
    console.log('myCustomVariable');
    console.log(myCustomVariable);
})();
(function () {
    var avenger = 123;
    var exist;
    var power;
    avenger = 'Dr. strange';
    console.log(avenger.charAt(0));
    avenger = 150.23256415;
    console.log(avenger.toFixed(2));
    console.log(exist);
    console.log(power);
})();
(function () {
    var numbers = [1, 2, 3, 4, 5, 7, 8, 9, 10];
    var villians = ["Omega rojo", "Dormamu", "Duende verde"];
    villians.forEach(function (v) { return console.log(v.toUpperCase()); });
    numbers.forEach(function (v) { return console.log(v.toUpperCase()); });
})();
(function () {
    var isSuperman = true;
    var isBatman = true;
    isSuperman = true && false;
    console.log({ isSuperman: isSuperman });
})();
(function () {
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["medium2"] = 3] = "medium2";
        AudioLevel[AudioLevel["medium3"] = 4] = "medium3";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    var currentAudio = AudioLevel.medium;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(function () {
    var error = function (message) {
        throw new Error(message);
    };
    error('Auxilio');
})();
(function () {
    var isActive = null;
})();
(function () {
    var avengers = 10;
    console.log(avengers);
    var villians = 20;
    if (avengers < villians) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Estamos salvados');
    }
    avengers = Number('123x');
    console.log({ avengers: avengers });
})();
(function () {
    var _a;
    var batman = 'Batman';
    var linternaVerde = "Linterna's verde";
    var volcanNegro = "H\u00E9roe: volcan negro";
    var abc = 123;
    console.log(" I'm ".concat(batman));
    console.log(batman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No esta presente');
})();
(function () {
    var hero = ['Dr strange', 100, true, [5]];
    hero[0] = 'Ironman';
    hero[1] = 50;
    hero[2] = false;
    console.log(hero);
})();
(function () {
    function callBatman() {
        return;
    }
    var callSuperman = function () {
        return undefined;
    };
    var a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=main.js.map