(() => {
    const hero:string = 'Flash';
    function returnName():string {
        return hero;
    }

    const activeBatiSignal = () => {
        return 'Batiseñal activada';
    }

    console.log(typeof activeBatiSignal);

    const heroName:string = returnName();
    
})();