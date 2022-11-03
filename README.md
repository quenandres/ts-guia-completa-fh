## __*7. Hola Mundo en TypeScript*__
Los navegadores no intrepretan ts, para esto se debe convertir de ts a js (Transpilación).

## __*8. TSConfig.json*__
```bash
tsc --init
```
Genera un archivo tsconfig.json para configurar ts en nuestro proyecto

```
target: es2016
module: commonjs
strict: true
esModuleInterop: true
skipLibCheck: true
forceConsistentCasingInFileNames: true
```

Lo que mas se hace en este archivo es modificar los archivos de salida, y que tan estricto es.
Con este archivo solo debemos ejecutar el comando ```tsc``` para ejecutar la transpilación.

## __*9. Modo observador - Watch mode*__

```bash
tsc --watch
```

Para mantener a typescript buscando cambios para transpilar.

## _*11. Introducción a los tipos de datos*_
Typescript es un superset de js

Tipos de datos
- Primitivos
  - String
    - ``` "María Perez" ```
    - ``` `Tesla` ```
    - ```  `Hola mundo` ```
  - Number
    - PI=3.14159265359
    - Salary = 1500.01
    - age = 19
  - Boolean
    - true | false
  - Symbol
    - sym = Symbol()
    - sym2 = Symbol('myProperty')
  - Null y Undefined
    - age = null
    - hero = undefined
- Compuestos
  - Objetos literales
    - Es un objeto con pares de valores
      - ```person = { name: 'Alfredo' }```
  - Funciones
    - ```function sayHello (){}```
    - ```const sayHello = () => {}```
  - Clases
    - ``` class Person { name } ```
  - Arreglos
    - []
  - TS permite crear nuevos tipos
  - interfaces
  - genericos
  - Tuplas
    - Hasta 3 o 4 pares de valores


## _*13. Inferir tipos y modo estricto*_
```typescript
const a = 10; // const a:10;
let b = 10; // let b: number
```


## _*14. Booleans - Booleanos*_

## _*15. Numbers - Números*_
*NaN* Es considerado como un numero

## _*16. Strings - Cadenas de caracteres*_

## _*17. Tipo Any*_
Usarlo lo menos posible que se pueda

## _*18. Arrays - Arreglos*_

## _*19. Tuples - Tuplas*_

## _*20. Enum - Enumeraciones*_
```ts
const hero: [string, number, boolean, number[]] = ['Dr strange', 100, true, [5]];
hero[0] = 'Ironman';
hero[1] = 50;
hero[2] = false;
console.log(hero);
```

## _*21. Void - Vacío*_
El void y el undefined son similares a diferencia de null.

## _*22. Never - Nunca*_
Metodo para respuestas de metodos que solo resuelven errores.

## _*23 Null - undefined *_
null y undefined son diferentes

## _*25. Tarea y Resolución del Ejercicio #1*_


## _*27. Funciones básicas*_
