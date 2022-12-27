import { getPokemon } from './generics/get-pokemon';

getPokemon(4)
    .then( resp => console.log(resp.sprites.front_default) )
    .catch( error => console.error(error) )
    .finally( () => console.log('fin de get') );