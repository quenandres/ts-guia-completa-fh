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