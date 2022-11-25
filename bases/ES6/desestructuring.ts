(() => {
    
    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }

    const avengers = {
        nick: 'Samuel L Jackson',
        ironman: 'Rober Downey Jr',
        vision: 'Paul bettany',
        activo: true,
        poder: 1500.1544
    }
    
    // const { poder,vision } = avengers;
    // console.log(poder.toFixed(2), vision.toUpperCase());

    const printAvenger = ({ironman, ...resto}: Avengers) => {
        console.log(ironman);
        console.log(resto);        
    }

    printAvenger(avengers);
    
})();