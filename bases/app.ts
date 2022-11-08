// Funciones Básicas
const sumar = ( a:number, b:number ):number => {
  return a + b;
}

const contar = ( heroes:string[] ):number => {
  return heroes.length;
}
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);

//Parametros por defecto
const llamarBatman = ( llamar?:boolean ): void => {
  if( llamar ){
    console.log("Batiseñal activada");
  }
}

llamarBatman();

// Rest?
const unirheroes = ( personas: string[] ):string => {
  return personas.join(", ");
}


// Tipo funcion
const noHaceNada = ( number: number, texto:string, booleano: boolean, arreglo: string[] ): void => {}

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco: (n:number, t:string, b:boolean, arreglo: string[]) => void;
noHaceNadaTampoco = noHaceNada
