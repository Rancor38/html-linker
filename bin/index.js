#! /usr/bin/env node
console.log("Hello, World!");
const shell = require('shelljs')
const path = '.'
shell.cd(path)
let args = process.argv.slice(2)
if (args.length === 0) {
    args = "new-html-linker"
}
console.log(args)
shell.exec(`git clone https://github.com/Rancor38/html-linker ${args ? args : "new-html-linker"}`)