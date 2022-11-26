(() => {

    class Apocalipsis {
        static instance: Apocalipsis;        
        private constructor( public name: string ) {}

        static callApocalipsis(): Apocalipsis {
            if( !Apocalipsis.instance ) {
                Apocalipsis.instance = new Apocalipsis('Soy apocalipsis el único');
            }
            return Apocalipsis.instance;
        }

        changeName( newName:string ):void {
            this.name = newName;
        }

    }

    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    apocalipsis2.changeName('Xavier');
    const apocalipsis3 = Apocalipsis.callApocalipsis();
    // const apocalipsis1 = new Apocalipsis('Soy apocalipsis1... el único');
    // const apocalipsis2 = new Apocalipsis('Soy apocalipsis2... el único');
    // const apocalipsis3 = new Apocalipsis('Soy apocalipsis3... el único');

    console.log(apocalipsis1);
    console.log(apocalipsis2);
    console.log(apocalipsis3);

})();