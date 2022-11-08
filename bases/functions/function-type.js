"use strict";
(function () {
    var addNumbers = function (a, b) { return a + b; };
    var greet = function (name) { return "Hola ".concat(name); };
    var saveTheWorld = function () { return "El mundo esta salvado"; };
    var myFunction;
    var myFunction2;
    var myFunction3;
    //* myFunction = 10;
    //* console.log(myFunction);
    myFunction = addNumbers;
    console.log(myFunction(5, 6));
    myFunction2 = greet;
    console.log(myFunction2('Albeiro'));
    myFunction3 = saveTheWorld;
    console.log(myFunction3());
})();
