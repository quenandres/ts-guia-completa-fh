"use strict";
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
