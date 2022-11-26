(() => {


    class Avenger {
        constructor(
            public name: string,
            public realName: string
        ) {
            console.log('Constructor avenger llamado !');            
        }

        protected getFullName() {
            return `${this.name} - ${this.realName}`;
        }
    }

    class Xmen extends Avenger {
        constructor(
            name: string,
            realName: string,
            public isMutant: boolean
        ) {                
            super(name, realName);
            console.log('Constructor xmen llamado !');
        }

        get fullname(){
            return `${this.name} - ${this.realName}`;
        }

        set fullname( name: string ) {
            if( name.length < 3 ) {
                throw new Error('El nombre debe ser mayor de 3 letras');
            }

            this.name = name;
        }

        getFullNameFromXmen() {            
            return super.getFullName();
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan', true);
    
    console.log( wolverine );
    console.log( wolverine.fullname );    
    wolverine.fullname = 'x3';
    console.log( wolverine.fullname );
    

})();