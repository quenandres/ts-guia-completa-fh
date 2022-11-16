(() => {
    type Hero = {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string;
    }

    let myCustomVariable: (string | number | Hero) = 'Test';
    
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