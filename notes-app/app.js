const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

// customize Yargs version 
yargs.version('1.1.0');


// Create add command 
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'          // Demands that the title argument passed in is of type 'string'
        },
        body:{
            describe: 'Contents of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        console.log('Title: ', argv.title);
        console.log('Body: ', argv.body);
    }

})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    hanlder: function (){
        console.log('Removing the note')
    }
})

yargs.command({
    command: 'list',
    describe: 'List out all notes',
    handler: function(){
        console.log('Listing out notes...')
    }
})

yargs.command({
    command: 'read',
    describe: 'showing all of our notest',
    handler: function(){
        console.log('starting the read of all notes...')
    }
})


yargs.parse();

//console.log(myNote);

//console.log(chalk.green('Success!!'));
//console.log(chalk.blue('cool blue'));

//console.log(process.argv[2])
