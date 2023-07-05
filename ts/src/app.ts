
import {addCommand, doneCommand, removeCommand, printCommand, helpCommand} from './commands'

const command = process.argv[2]
let parms: any = process.argv[3]

switch (command){
    case 'add':
        addCommand(parms)
        break;
    case 'done':
        doneCommand(parms - 1)
        break;
    case 'remove':
        removeCommand(parms - 1)
        break;
    case 'print':
        printCommand()
        break;
    case 'help':
    case 'h':
        helpCommand()
        break;
    default:
        console.log(`the command ${command} does not exist, try with:
        node app.js help`)
}