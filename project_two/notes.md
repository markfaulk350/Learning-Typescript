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

Then to run the compiled code
```bash
node /dist index.js
```

Install package.json & nodemon & concurrently
```bash
npm init -y
npm install nodemon concurrently
```

tsc -w only compiles the code. We have to set up nodemon and concurrently inside of package.json to hot compile and run the code
```json
{ 
    // package.json

  "scripts": {
    "start:dist": "tsc -w",
    "start:run": "nodemon dist/index.js",
    "start": "concurrently npm:start:*" // * sign will run all start: commands concurrently
  }
}
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

# Type Guards
Sometimes functions are passed different types of arguments. In TypeScript we need to specify the different expected types for each argument.
There are 2 different Type Guards that we can use
1. typeof ('string', 'number', 'boolean')
2. instanceof (Array, Date, Object, CustomClass)

```typescript
let myName = 'Mark'
if (typeof myName === 'string') {}  // Simple stuff like strings, numbers, boolean.

let scores = [21, 60, 42, 53]
if (scores instanceof Array) {}    // Complicated stuff like arrays, objects, etc.
```

typeof is used for checking basic types like strings and numbers. But we NEED to use instanceof for things like Arrays, and Objects or any custom classes.