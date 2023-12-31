# Node-Ts-Nodemon-Starter

# Starter Template For Node.js Configured for Typescript use.

### Configured with ts-node and  nodemon


I was having a hard time finding a template just to get the basics started for a node.js project configured for TS by default so I created this repo for personal use.  Feel free to improve on it, I know it is an extremely basic template. 


#### Things To Keep in mind
- This repo is for personal use so it probably won't get updated by me unless it's specifically requested or something stops working
- There are extra emit settings enabled in the tsconfig.json file to increase enforced settings by TS such as no unused variables/paramaters and no implecet 'any' types.
- I threw this together quickly for a starter template so if you see anthing that isn't "best practices".. sorry about that. 
- There is a launch.json file for debugging in VSCode however I haven't configured it with anything past the initial creation. 
To Debug all I did was change the debugger tab to `Run Script: Start` and the debugger worked great. 


### Commands:
### To get started clone the repo and then open up your editor, mine is VSCode
```
git clone https://github.com/FitzM/Node-Ts-Nodemon-Starter.git
cd Node-Ts-Nodemon-Starter
npm install
code .  \\ Opens VSCode in the current directory
```
#### To transpile TS to JS (located in dist) and run the file run :

```npm test```

- This actually runs `tsup src/index.ts && ts-node src/index.ts` 
- it runs the "pretest" first which creats the .js file in dist and then runs the index.ts file
  
#### To transpile your code, run it _and_ watch it run:

`npm start` 

- This actually runs `nodemon --exec ts-node src/index.ts` This transpiles the code and then nodemon watches the files for changes on save, if you save it will re-transpile and update your changes live. Think of "Hot Reload" although i'm pretty sure it's technically different. 

#### To just transpile the code from TS to JS and generated a .js in the src directory

`npx tsc src/index.ts`

- tsc isn't actually installed directly, ts-node doesn't create a .js file in your directory.
