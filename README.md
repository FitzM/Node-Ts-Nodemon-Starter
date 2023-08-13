# Node-Ts-Nodemon-Starter

# Starter Template For Node.js Configured for Typescript use.

### Configured with ts-node and  nodemon


I was having a hard time finding a template just to get the basics started for a node.js project configured for TS by default so I created this repo for personal use.  Feel free to improve on it, I know it is an extremely basic template. 


#### Things To Keep in mind
- This repo is for personal use so it probably won't get updated by me unless it's specifically requested or something stops working
- There are extra emit settings enabled in the tsconfig.json file to increase enforced settings by TS such as no unused variables/paramaters and no implecet 'any' types.
- I threw this together quickly for a starter template so if you see anthing that isn't "best practices".. sorry about that. 


### Commands:
#### To transpile TS to JS and run the file run :

```npm test```

- This actually runs `ts-node src/index.ts` 

#### To transpile your code, run it _and_ watch it run:

`npm start` 

- This actually runs `nodemon --exec ts-node src/index.ts` This transpiles the code and then nodemon watches the files for changes on save, if you save it will re-transpile and update your changes live. Think of "Hot Reload" although i'm pretty sure it's technically different. 
