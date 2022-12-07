import { printObject, genericFunction } from "./generics/generics";

// printObject(123);
// printObject( new Date());
// printObject({a:1,n:2});
// printObject([1,2,3,4,5]);
// printObject('Cadena');

console.log( genericFunction( 3.1416 ).toFixed(2) );
console.log( genericFunction( new Date() ).toFixed(2) );
