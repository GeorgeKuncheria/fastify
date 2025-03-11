# fastify


```bash
npm init -y
```

## To install TypeScript  and types

```bash
npm install -D typecript @types/node
```

## To install Fastify

```bash
npn install fastify
```


## To create tsconfig.json file 

```
npx tsc --init
```

First modify things from tsconfig.json 
    - In target change to ESNext
    - UNCOMMENT baseURL,moduleResolution,outDir
    - outDir should "./dist"


## Install Nodemon 

```bash

npm install nodemon

    or

sudo npm install -g nodemon
```



## package.json Script:
    "scripts": {
    "build": "tsc -p tsconfig.json",
    "start": "tsc -w & nodemon dist/index.js"
  },

