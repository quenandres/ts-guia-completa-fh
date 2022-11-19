"use strict";
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
//# sourceMappingURL=args-rest.js.map