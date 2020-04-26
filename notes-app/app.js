const chalk = require('chalk');
const yargs = require('yargs')
const getNotes = require('./notes.js');

const command = process.argv[2]

console.log(yargs.argv)

if (command === 'add'){
    console.log('Adding note!');
} else if (command === 'remove'){
    console.log("deleting note!")
} else {
    console.log("not a valid choice")
}

//console.log(myNote);

//console.log(chalk.green('Success!!'));
//console.log(chalk.blue('cool blue'));

//console.log(process.argv[2])
