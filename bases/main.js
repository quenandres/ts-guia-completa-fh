"use strict";
(() => {
    let flash = {
        name: 'Barry Alen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo', 'Rapida regeneración'],
    };
    let superman = {
        name: 'Clark Kent',
        age: 52,
        powers: ['Super velocidad', 'Super fuerza'],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    class Mutant {
        mutantPower() {
            throw new Error("Method not implemented.");
        }
    }
})();
(() => {
    const client = {
        name: 'Jhonatan',
        address: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'Ottawa'
        },
        getFullAdrress(id) {
            return this.address.city;
        }
    };
    const client2 = {
        name: 'Melissa',
        age: 30,
        address: {
            id: 120,
            city: 'Toronto',
            zip: 'AW 441'
        },
        getFullAdrress(id) {
            return this.address.city;
        },
    };
})();
//# sourceMappingURL=main.js.map