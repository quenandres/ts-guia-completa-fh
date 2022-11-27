(() => {
    
    interface Xmen {
        name: string;
        realName: string;
        mutantPower( id: number ):string;
    }

    interface Human {
        age: number
    }

    class Mutant implements Xmen, Human {
        age: number;
        name: string;
        realName: string;
        mutantPower(): string {
            throw new Error("Method not implemented.");
        }

    }


})();