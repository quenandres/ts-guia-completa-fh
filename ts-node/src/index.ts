import { Pokemon } from "./decorators/pokemon-class";

const charmander = new Pokemon('charmander');
(Pokemon.prototype as any).customName = 'Pikachu';
console.log(charmander);

charmander.publicApi = 'aaaaaaaaaaah';

charmander.savePokemonToDB(3);