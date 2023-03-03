#! /usr/bin/env node
console.log("Hello, World!");
const shell = require('shelljs')
const path = '.'
shell.cd(path)
shell.exec('git clone https://github.com/Rancor38/html-linker')
shell.exec('git remote rm origin')