"use strict";
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
