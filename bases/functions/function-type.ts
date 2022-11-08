(() => {
    const addNumbers = (a: number, b: number) => a + b;
    const greet = (name: string) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo esta salvado`;

    let myFunction: (a:number, b:number) => number;
    let myFunction2: (a:string) => string;
    let myFunction3: () => string;

    //* myFunction = 10;
    //* console.log(myFunction);

    myFunction = addNumbers;
    console.log( myFunction(5,6) );
    
    myFunction2 = greet;
    console.log( myFunction2('Albeiro') );
    
    myFunction3 = saveTheWorld;
    console.log( myFunction3() );
})();