"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helpCommand = exports.printCommand = exports.removeCommand = exports.doneCommand = exports.addCommand = void 0;
const node_fs_1 = __importDefault(require("node:fs"));
const node_path_1 = __importDefault(require("node:path"));
const listFunctions_1 = require("./listFunctions");
const memoize_1 = require("./memoize");
const Task_1 = require("./Task");
const filePath = node_path_1.default.join(__dirname, './toDoList.json');
const readFile = (fileName) => {
    try {
        const buffer = node_fs_1.default.readFileSync(fileName);
        const jsonString = buffer.toString();
        const jsonObject = JSON.parse(jsonString);
        return jsonObject;
    }
    catch (error) {
        return [];
    }
};
const readFileMemo = (0, memoize_1.memoize)(readFile);
const writeFile = (fileName, content) => {
    try {
        const jsonString = JSON.stringify(content);
        const buffer = Buffer.from(jsonString);
        node_fs_1.default.writeFileSync(fileName, buffer);
    }
    catch (e) {
        console.log('error in the function writeFile');
    }
};
const writeFileMemo = (0, memoize_1.memoize)(writeFile);
const addCommand = (name) => {
    const toDoList = readFileMemo(filePath);
    if (name === undefined) {
        console.log('Please introduce a name for the Task.');
        process.exit();
    }
    const task = new Task_1.Task(name);
    (0, listFunctions_1.addTask)(toDoList, task);
    writeFileMemo(filePath, toDoList);
    (0, listFunctions_1.mapList)(toDoList);
};
exports.addCommand = addCommand;
const doneCommand = (index) => {
    const toDoList = readFileMemo(filePath);
    (0, listFunctions_1.verifyTask)(toDoList, index);
    (0, listFunctions_1.changeStatus)(toDoList, index);
    writeFileMemo(filePath, toDoList);
    (0, listFunctions_1.mapList)(toDoList);
};
exports.doneCommand = doneCommand;
const removeCommand = (index) => {
    let toDoList = readFileMemo(filePath);
    (0, listFunctions_1.verifyTask)(toDoList, index);
    (0, listFunctions_1.deleteTask)(toDoList, index);
    writeFileMemo(filePath, toDoList);
    (0, listFunctions_1.mapList)(toDoList);
};
exports.removeCommand = removeCommand;
const printCommand = () => {
    const toDoList = readFileMemo(filePath);
    (0, listFunctions_1.mapList)(toDoList);
};
exports.printCommand = printCommand;
const helpCommand = () => {
    console.log(`
    List of commands:
        -add + 'name of the new task' => creates a new task
        -done + 'number of the task done' => change the status of the task
        -remove + 'number of the task to remove' => deletes the task
        -print => prints the full task list`);
};
exports.helpCommand = helpCommand;
//# sourceMappingURL=commands.js.map