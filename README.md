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