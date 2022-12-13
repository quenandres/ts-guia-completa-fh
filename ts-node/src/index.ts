import { printObject, genericFunction, genericFunctionArrow } from "./generics/generics";
import { Hero } from "./interfaces/hero";
import { Villian } from './interfaces/villian';

// printObject(123);
// printObject( new Date());
// printObject({a:1,n:2});
// printObject([1,2,3,4,5]);
// printObject('Cadena');

// console.log( genericFunctionArrow( 3.1416 ).toFixed(2) );
// console.log( genericFunctionArrow( 'Hola' ).toUpperCase() );
// console.log( genericFunctionArrow( new Date() ).getDate() );

const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Wilson',
    dangerLevel: 130
}

console.log( genericFunctionArrow<Villian>(deadpool).dangerLevel );
