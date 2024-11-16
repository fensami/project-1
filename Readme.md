## Express Init Tarminal

```
npm init

```

## Install Express

```
npm add express
```

## Install Typescript

```
 npm add -D ts-node-dev
```

## Typescript Compiler
```
tsc --init

```

# Configer Outder And Rootdir {tsconfig.json file}

## Install type node

```
npm add -D @types/node
```
## Install type express
```
npm i --save-dev @types/express

```

## typescript compiler command
```
tsc -w
```

## Install Nodemon

```
npm add -D nodemon

```

## nodemon run this command
```
nodemon ./pathname
```

## api testing tool 

```
https://www.postman.com/downloads/
```

## All Error Handler
```
app.all("*",(req : Request,res: Response)=> {
  res.status(400).json({
    success: false,
    message: "Route is not found"
  })
})
```