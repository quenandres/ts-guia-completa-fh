"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        static getAvgAge() {
            return this.name;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger('Antman', 'Cap', 'Scott Lang');
    console.log(antman);
    console.log(Avenger.getAvgAge);
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('Constructor avenger llamado !');
        }
        getFullName() {
            return `${this.name} - ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log('Constructor xmen llamado !');
        }
        get fullname() {
            return `${this.name} - ${this.realName}`;
        }
        set fullname(name) {
            if (name.length < 3) {
                throw new Error('El nombre debe ser mayor de 3 letras');
            }
            this.name = name;
        }
        getFullNameFromXmen() {
            return super.getFullName();
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan', true);
    console.log(wolverine);
    console.log(wolverine.fullname);
    wolverine.fullname = 'x3';
    console.log(wolverine.fullname);
})();
//# sourceMappingURL=main.js.map