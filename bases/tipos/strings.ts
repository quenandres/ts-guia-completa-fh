(() => {
    const batman: string = 'Batman';
    const linternaVerde = "Linterna's verde";
    const volcanNegro = `Héroe: volcan negro`;
    const abc = 123;

    console.log(` I'm ${ batman }`);
    
    console.log( batman.toUpperCase() );

    console.log( batman[10]?.toUpperCase() || 'No esta presente' );
    
    
})();