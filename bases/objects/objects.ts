(() => {

    let flash: { name: string, age?:number, powers: string[], getName?: () => string } = {
        name: 'Barry Alen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo', 'Rapida regeneración'],
    }


    flash = {
        name: 'Clark kent',
        //age: 65,
        powers:['Super fuerza', 'Vision calorica'],
        getName() {
            return this.name;
        }
    }

    console.log(flash.getName());
    

})();