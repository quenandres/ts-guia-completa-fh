"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: 'Samuel L Jackson',
        ironman: 'Rober Downey Jr',
        vision: 'Paul bettany',
        activo: true,
        poder: 1500.1544
    };
    const printAvenger = (_a) => {
        var { ironman } = _a, resto = __rest(_a, ["ironman"]);
        console.log(ironman);
        console.log(resto);
    };
    const avengersArr = ['Cap America', true, 150.15];
    const [capitan, ironman, numero] = avengersArr;
    console.log(ironman);
    console.log(capitan);
    console.log(numero);
})();
(() => {
    const ironman = {
        name: "Tony Stark",
        weapon: "Armorsuit"
    };
    const captainAmerica = {
        name: "Steve rogers",
        weapon: "Shield"
    };
    const thor = {
        name: "Thor",
        weapon: "Mjolnir"
    };
    const avengers = [ironman, thor, captainAmerica];
    for (const avenger of avengers) {
        console.log(avenger.name);
        console.log(avenger.weapon);
    }
})();
(() => {
    const getName = () => {
        console.log('Log viejo');
    };
})();
//# sourceMappingURL=main.js.map