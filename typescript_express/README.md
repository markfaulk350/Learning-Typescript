# TypeScript Express API

### Setup
1. Generate a new npm project
```bash
npm init -y
```
2. Generate a tsconfig file
```bash
tsc --init
```
3. Install nodemon & concurrently
```bash
npm i nodemon concurrently
```
4. Configure src and dist directory in tsconfig.json
```json
    // tsconfig.json

    "outDir": "./dist",     // JavaScript
    "rootDir": "./src",     // Typescript
```
5. Configure Typescript and Nodemon to hot compile and reload with concurrently
```json
    // package.json

  "main": "index.js",
  "scripts": {
    "start:build":"tsc -w",
    "start:run":"nodemon dist/index.js",
    "start":"concurrently npm:start:*"
  },
```

6. Install Express, Body-Parser, Cookie-Sessions
```bash
npm i express body-parser cookie-session
```

7. Install type definition files
```bash
npm i @types/express @types/body-parser @types/cookie-session
```

# Traversy Setup

1. You can install some npm packages as development dependencies
```bash
npm i -D typescript ts-node nodemon @types/express @types/node
```
2. ```json
    // package.json

  "main": "index.js",
  "scripts": {
    "start":"node dist/index.js",
    "dev":"nodemon src/index.ts",
    "build":"tsc -p ."
  },
```
