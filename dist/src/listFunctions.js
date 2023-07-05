"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeStatus = exports.mapList = exports.deleteTask = exports.verifyTask = exports.addTask = void 0;
function addTask(array, task) {
    array.push(task);
}
exports.addTask = addTask;
function verifyTask(array, index) {
    const foundTask = array[index];
    if (foundTask === undefined) {
        console.log('Task not found.');
        process.exit();
    }
}
exports.verifyTask = verifyTask;
function deleteTask(array, index) {
    array.splice(index, 1);
}
exports.deleteTask = deleteTask;
function mapList(array) {
    let formatedList = '';
    for (let i = 0; i < array.length; i++) {
        const taskDTOName = array[i].name;
        const taskDTOisDone = array[i].isDone;
        let isDone;
        taskDTOisDone ? isDone = '✅' : isDone = '⭕';
        const formatedTask = `${i + 1}.${taskDTOName}: ${isDone}\n`;
        formatedList += formatedTask;
    }
    console.log(formatedList);
    return formatedList;
}
exports.mapList = mapList;
function changeStatus(array, index) {
    array[index].isDone = !array[index].isDone;
}
exports.changeStatus = changeStatus;
//# sourceMappingURL=listFunctions.js.map