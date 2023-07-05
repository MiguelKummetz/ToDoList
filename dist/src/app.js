"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commands_1 = require("./commands");
const command = process.argv[2];
let parms = process.argv[3];
switch (command) {
    case 'add':
        (0, commands_1.addCommand)(parms);
        break;
    case 'done':
        (0, commands_1.doneCommand)(parms - 1);
        break;
    case 'remove':
        (0, commands_1.removeCommand)(parms - 1);
        break;
    case 'print':
        (0, commands_1.printCommand)();
        break;
    case 'help':
    case 'h':
        (0, commands_1.helpCommand)();
        break;
    default:
        console.log(`the command ${command} does not exist, try with:
        node app.js help`);
}
//# sourceMappingURL=app.js.map