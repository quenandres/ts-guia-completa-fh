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


## _*28. Parametros obligatorios*_

## _*29. Parámetros opcionales de las funciones*_
El simbolo _?_ indica que el string no es requerido.

```ts
const fullName = (firstName:string, lastName?:string): string => {
    return firstName+" "+ (lastName || '');
}

const name = fullName('Tony', 'Stark');
console.log({name});    
```


## _*30. Parámetros por defecto*_


## _*31. Parametros REST*_


## _*32. Tipo Función*_


## _*35. Objetos básicos*_

## _*36. ¿Cómo crear objetos con tipos específicos?*_

## _*37. Métodos dentro de los objetos*_

## _*38. Problema con la definición en línea*_

## _*39. Tipos personalizados*_

## _*40. Multiples tipos permitidos*_

## _*42. Tarea y Resolución del ejercicio práctico #3*_


# _*Seccion 6. Depuración de errores y el archivo tsconfig.json*_

¿Qué veremos en esta sección?
La sección se enfoca en la depuración de errores y comprender el archivo de configuración de TypeScript (el tsconfig.json)

Puntualmente:

- Aprenderemos el ¿por qué siempre compila a JavaScript?
- Para que nos puede servir el archivo de configuración de TypeScript
- Realizaremos depuración de errores directamente a nuestros archivos de TypeScript
- Removeremos todos los comentarios en nuestro archivo de producción.
- Restringiremos al compilador que sólo vea ciertos archivos o carpetas
- Crearemos un archivo final de salida
- Aprenderemos a cambiar la version de JavaScript de salida

Adicionalmente tendrán el conocimiento necesario para compilar automáticamente cualquier archivo que se vaya creando al momento de ser insertado a nuestro proyecto.



## _*45. ¿Qué es el archivo tsconfig y para qué nos puede servir?*_

## _*46. ¿Es posible la depuración del código de TypeScript?*_

```json
"sourceMap": true,
```
Es utilizado para que las lineas de codigo sean del midmo numero tanto en ts como en js.


## _*47. Remover los comentarios de los archivos de JavaScript*_
Los comentarios tambien se trasladan en la transpilación de ts a js.


## _*48. Incluir y excluir carpetas y/o archivos*_

La carpeta de node_modules esta excluida de manera automatica.
```json
,
  "exclude": [
    "node_modules2/*.ts"
  ],
  "include": [
    "node_modules2/*.ts"
  ]
```
Despues de cerrar el objeto principal de tsconfig, podemos definir un objeto con las indicaciones para incluir o exluir archivos de ts para que no sean transpilados.

## _*49. outFile - Archivo de salida*_

```json
"outFile": "./main.js", 
```
Con esto ponemos los archivos ts en un solo archivo js


# _*Seccion 7. Caracterisitcas de ES6 o Javascript2015 disponibles a través TypeScript*_

JavaScript va actualizando año con año, y tenemos que estar enterados de todo lo nuevo para saber cómo le sacamos el máximo provecho!
Esta sección esta orientada a enseñarles un par de cosas muy útiles y necesarias del ES6 (ES2015 o ECMAScript 6), que ya podemos utilizar con toda confianza en TypeScript.

Aprenderemos sobre:

- Diferencia entre declarar variables con VAR y con LET
- Uso de constantes
- Plantillas literales
- Funciones de flecha
- Destructuración de objetos
- Destructuración de Arreglos
- Nuevo ciclo, el FOR OF
- Conocer sobre la programación orientada a objetos
- Clases

Al final, un examen práctico y teórico para afianzar los conocimientos.


## _*51. Variables LET*_

Siempre usar constantes a menos de que se este muy seguro de que van a ser cambiados los valores.

## _*52. Desestructuración de Objetos*_

## _*53. Desestructuración de Arreglos*_

## _*54. Ciclo - For of*_

## _*55. Clases en ES6*_

# _*Seccion 8. Clases en TypeScript*_

La programación orientada a objetos es un tema sumamente importante, especialmente si nuestras aplicaciones van de mediana a gran escala. TypeScript trae toda la potencia de una programación orientada a objetos a la web.

Toda la sección se enfoca en enseñar sobre el uso de clases.

Puntualmente aprenderemos sobre:

- Crear clases en TypeScript
- Constructores
- Accesibilidad de las propiedades:
  - Públicas
  - Privadas
  - Protegidas
- Métodos de las clases que pueden ser:
  - Públicos
  - Privados
  - Protegidos
- Herencia
- Llamar funciones del padre, desde los hijos
- Getters 
- Setters
- Métodos y propiedades estáticas
- Clases abstractas
- Constructores privados.

## _*58. Definición de una clase básica en TypeScript*_



