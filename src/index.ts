import * as fs from "node:fs"


let contents = fs.readFileSync( __dirname +"\\testingFS.txt", "utf-8")
if(!contents){
    console.log("We couldn't find the file :(")
}
else{console.log(contents)}
