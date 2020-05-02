# TypeScript Notes

#### Compiling Typescript to Javascript
To compile a single file
```bash
tsc index.ts
```

To generate a tsconfig.json file for an entire project
```bash
tsc --init
```

To compile an entire project with a tsconfig.json already set up
```bash
tsc
```

Hot reload and compile on save (Watch)
```bash
tsc -w
```

To compile a project
1. Create a src folder (TypeScript)
2. Create a dist folder (JavaScript)
3. Generate a tsconfig.json file (Used to tell the compiler how to behave)
4. Change outDir and RootDir inside tsconfig.json
5. Then type tsc to compile

```json
{
    // tsconfig.json

    "outDir": "./dist",     // Compiled JavaScript
    "rootDir": "./src",     // TypeScript
}
```