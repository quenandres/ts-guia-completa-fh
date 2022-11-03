(() => {
    enum AudioLevel {
        min = 1,
        medium,
        medium2,
        medium3,
        max = 10
    }

    let currentAudio = AudioLevel.medium;
    console.log(currentAudio);
    console.log(AudioLevel);
    
})();