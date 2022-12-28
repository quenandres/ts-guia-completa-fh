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

## _*59. Forma corta de asignar propiedades*_

## _*60. Métodos públicos y privados*_

## _*61. Herencia, super y extends*_
La diferencia entre private y protected, se podra acceder en metodos que se extiendan desde la clase principal.

## _*62. Gets y Sets*_
El set permite crear condicionales para hacer la asignacion de valores.
El get tambien permite crear ciertas condicionales para dejar valores por defecto. La respuesta debe ser sincrona.

## _*63. Clases Abstractas*_
Las clases abstractas sirven para crear otras clases.

```ts
abstract class Mutante {
    constructor(
        public name:string,
        public realName:string
    ) {}
}

class Xmen extends Mutante {
    salvarMundo() {
        return 'Mundo a salvo'
    }
}

class Villian extends Mutante {
    conquistarMundo() {
        return 'Mundo conquistado'
    }
}
```

## _*64. Constructores privados*_
Usado generalmente para hacer uso del patron singleton.
```ts
class Apocalipsis {
    static instance: Apocalipsis;        
    private constructor( public name: string ) {}

    static callApocalipsis(): Apocalipsis {
        if( !Apocalipsis.instance ) {
            Apocalipsis.instance = new Apocalipsis('Soy apocalipsis el único');
        }
        return Apocalipsis.instance;
    }

    changeName( newName:string ):void {
        this.name = newName;
    }
}
```

# _*Seccion 9. Interfaces*_
Esta sección esta dedicada a crear interfaces, las cuales nos permitirán crear reglas o planos de como se deben de construir clases, métodos u objetos.

Puntualmente aprenderemos:
- ¿Por qué es necesario una interfaz?
- ¿Cómo creamos una interfaz básica?
- Crear propiedades opcionales
- Crear métodos
- Asignar interfaces a las clases
Al final, tendremos un examen práctico y teórico sobre las interfaces.


## _*67. Interfaz básica*_
La interfaz funciona casi para lo mismo que un tipo.
Las interfaces se puede extender, los tipos no.
> Interface
```ts
interface Hero {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
}
```
> Type
```ts
type Hero = {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
}
```

## _*68. Estructuras complejas*_
Las interfaces no se transpilan a js, tambien podemos crear interfaces basadas en otras interfaces.


## _*69. Métodos en la interfaz*_
Tambien se pueden poner metodos a la interfaz para que sean cumplidas o resueltas.

## _*70. Interfaces en las clases*_

Las clases pueden implementar interfaces.

```ts
interface Xmen {
    name: string;
    realName: string;
    mutantPower( id: number ):string;
}

interface Human {
    age: number
}

class Mutant implements Xmen, Human {
    age: number;
    name: string;
    realName: string;
    mutantPower(): string {
        throw new Error("Method not implemented.");
    }

}
```

## _*71. Interfaces para las funciones*_
## _*73. Tarea y Resolución del ejercicio práctico #5*_


# _*Seccion 10. Namespaces*_

TypeScript, es un lenguaje de programación web, que nos permite crear objetos que nos servirán a lo largo de nuestro programa. 
Los namespaces, existen para ayudarnos en la re utilización de nuestras variables, constantes y métodos.

Puntualmente aprenderemos sobre:

- Explicación del ¿por qué son necesarios los namespaces?
- Crear namespaces
- Multiples namespaces en un mismo proyecto
- Importar namespaces
- Problemática que se puede presentar utilizando un namespace.

## _*76. Creando un Namespace*_
El namespace funciona como agrupador, utilizado en librerias y frameworks.


## _*77. Inicio de proyecto - Módulos y Webpack*_

## _*78. Imports y Exports*_


## _*79. Export default y exportación con alias_*

```ts
import { Hero as Superhero, Hero2 } from './classes/Hero';
```
__as__ Se comporta como un alias.

Exportación por defecto
```ts
interface Power {
    id: number;
    desc: string;
}

const powers: Power[] = [
    {
        id: 1,
        desc: 'Money'
    },
    {
        id: 2,
        desc: 'Test'
    }
];

export default powers;
```
>
```ts
import powers from './data/powers';
```

Exportación
```ts
interface Power {
    id: number;
    desc: string;
}

export const powers: Power[] = [
    {
        id: 1,
        desc: 'Money'
    },
    {
        id: 2,
        desc: 'Test'
    }
];
```
>
```ts
import { powers } from './data/powers';
```

## _*80. Tarea - Resolver errores en TypeScript*_

#### ? Con este simbolo le decimos a _ts_ que no siempre se encontrara un valor
```ts
  return powers.find( power => power.id === this.powerId )?.desc || 'not found';
```

#### ! Con este simbolo le aseguramos a _ts_ que siempre va a tener un valor
```ts
  return powers.find( power => power.id === this.powerId )!.desc || 'not found';
```

# _*Seccion 11. Genericos - Generics*_


### ¿Qué veremos en esta sección?
JavaScript por ser un lenguaje dinámico, conlleva a tener varios problemas por esa misma flexibilidad, pero a su vez, permite resolver problemas de una forma muy sencilla. Esta sección esta destinada a comprender como mantener la programación estructurada del TypeScript con el dinamismo de JavaScript.

Puntualmente aprenderemos sobre:

- Uso de los genéricos
- Funciones genéricas
- Ejemplos prácticos sobre los genéricos
- Arreglos genéricos
- Clases genéricas

## _*83. Introducción a los Genéricos*_

Una funcion generica recibe cualquier tipo de argumento.

## _*84. Funciones Genéricas*_
```ts
export function genericFunction( argument:any ) {
  return argument;
}
```

```ts
export function genericFunction<T>( argument:T ):T {
  return argument;
}
```
>

```ts
export const genericFunctionArrow = <T>(argument: T):T => argument;
```

## _*85. Ejemplo de función genérica en acción*_


## _*86. Agrupar exportaciones*_
archivo index.ts en la carpeta de interfaces
```ts
export { Hero } from './hero';
export { Villian } from './villian';
```

## _*87. Ejemplo aplicado de genéricos*_


## _*88. Mapear respuestas http*_
_quicktype.io_

## _*89. Quicktype.io extensión*_

# _*Seccion 12. Decoradores*_


### ¿Qué veremos en esta sección?
Los decoradores son una característica nueva en el TypeScript que cada vez es más utilizada por otros frameworks como Angular 2. Pero vamos a aprender a utilizar decoradores en nuestros proyectos.

Puntualmente aprenderemos sobre:

- ¿Qué son los decoradores?
- ¿Para qué sirven?
- Decoradores de clases
- Decoradores de fabrica
- Ejemplos prácticos
- Decoradores anidados
- Decoradores de métodos
- Decoradores de propiedades
- Decoradores de parámetros

## _*92. Introducción a los decoradores*_
Permite expandir funcionalidades de clases, metodos y propiedades.
```ts
@Controller('Cats')
```

## _*93. Decoradores de clases*_
Se ejecuta en el momento de transpilación del codigo.
```ts
function printToConsole( constructor: Function ) {
    console.log(constructor);    
}

@printToConsole
export class Pokemon {
    public publicApi: string = 'https://pokeapi.co/';
    constructor(
        public name: string
    ) {}
}
```
De esta manera vemos todo el codigo de la clase impresa en consola.

## 94. _*Decoradores de fabrica - Factory decorators*_
```ts
function printToConsole( constructor: Function ) {
    console.log(constructor);    
}

const printToConsoleConditional = ( print: boolean = false ):Function => {
    if ( print ){
        return printToConsole;
    } else {
        return () => {}
    }
}

@printToConsoleConditional( false )
export class Pokemon {
    public publicApi: string = 'https://pokeapi.co/';
    constructor(
        public name: string
    ) {}
}
```
De esta manera condionamos el funcionamiento del decorador.


## _*95. Ejemplo de un decorador - Bloquear prototipo*_
```ts
const bloquearPrototype = function( constructor: Function ) {
    Object.seal(constructor)
    Object.seal(constructor.prototype)
}
```

```ts
@bloquearPrototype
@printToConsoleConditional( true )
export class Pokemon {}
```


## _*96. Decoradores de métodos*_

> Factory decorator - se debe ejecutar para que retorne la funcion que tiene dentro
```ts
function CheckValidPokemonId() {
    return function( target: any, propertyKey:string, descriptor: PropertyDescriptor ) {
        
        const originalMethod = descriptor.value;

        descriptor.value = ( id: number ) => {
            if( id < 1 || id > 800 ) {
                return console.error('El id del pokemon debe estar entre 1 y 800');
            } else {
                return originalMethod(id);
            }
        }
        //descriptor.value = () => console.log('Hola mundo');
    }
}
```
 
- target: Objetivo - class, 
- propertyKey: nombre del metodo o clase, 
- descriptor: Permite cambiar de escritura o lectura el metodo


## _*97. Decoradores de propiedades*_
Cuando son decoradores de propiedades, no hay descriptor.

```ts
function readonly( isWritable: boolean = true ): Function {
    return function( target: any, propertyKey: string ){
        // PropertyDescriptor
        const descriptor: PropertyDescriptor = {
            get() {
                console.log(this);
                return 'Fernando';
            },
            set(this, val) {
                Object.defineProperty(this, propertyKey, {
                    value: val,
                    writable: !isWritable,
                    enumerable: false
                });
            }
        }
        return descriptor;
    }
}
```

