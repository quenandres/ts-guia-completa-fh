(() => {


    class Avenger {
        constructor(
            public name: string,
            public realName: string
        ) {
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
    

})();