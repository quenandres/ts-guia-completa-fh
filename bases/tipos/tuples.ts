(() => {
    const hero: [string, number, boolean, number[]] = ['Dr strange', 100, true, [5]];

    hero[0] = 'Ironman';
    hero[1] = 50;
    hero[2] = false;
    console.log(hero);
    
})();