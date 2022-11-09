"use strict";
(function () {
    var flash = {
        name: 'Barry Alen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo', 'Rapida regeneración'],
    };
    flash = {
        name: 'Clark kent',
        //age: 65,
        powers: ['Super fuerza', 'Vision calorica'],
        getName: function () {
            return this.name;
        }
    };
    console.log(flash.getName());
})();
