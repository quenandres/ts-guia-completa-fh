"use strict";
(function () {
    var flash = {
        name: 'Barry Alen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo', 'Rapida regeneración']
    };
    flash = {
        name: 'Clark kent',
        age: 65,
        powers: ['Super fuerza', 'Vision calorica'],
        getNombre: function () {
            return this.name;
        }
    };
})();