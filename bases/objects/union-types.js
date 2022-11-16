"use strict";
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
