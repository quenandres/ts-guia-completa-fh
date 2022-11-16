(() => {

    type Hero = {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string;
    }

    let flash: Hero = {
        name: 'Barry Alen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo', 'Rapida regeneración'],
        //powers: [1,2],
    }


    let suoerman: Hero = {
        name: 'Clark Kent',
        age: 52,
        powers: ['Super velocidad', 'Super fuerza'],
        getName() {
            return this.name
        }
        //powers: [9,5],
    }
    

})();