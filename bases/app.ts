
// Objetos
type Auto = {
  carroceria: string;
  modelo: string;
  antibalas: boolean;
  pasajeros: number;
  disparar?: () => void
}

const batimovil: Auto = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros:4
};

const bumblebee: Auto = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros:4,
  disparar(){ // El metodo disparar es opcional
    console.log("Disparando");
  }
};


// Villanos debe de ser un arreglo de objetos personalizados
type Villians = {
  nombre: string;
  edad: number;
  mutante: boolean;
}

const villanos:Villians[] = [{
  nombre:"Lex Luthor",
  edad: 54,
  mutante:false
},{
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
},{
  nombre: "James Logan",
  edad: undefined,
  mutante: true
}];

// Multiples tipos
type psiquico = {
  poder: string;
  estatura: number
}

type otro = {
  lider: boolean;
  miembros: string[]
}
// cree dos tipos, uno para charles y otro para apocalipsis
const charles: psiquico = {
  poder:"psiquico",
  estatura: 1.78
};

console.log('charles');
console.log(charles);

const apocalipsis: otro = {
  lider:true,
  miembros: ["Magneto","Tormenta","Psylocke","Angel"]
}

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique: (psiquico|otro);

mystique = charles;
mystique = apocalipsis;
