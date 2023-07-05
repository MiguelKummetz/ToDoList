"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Task_1 = require("../src/Task");
const listFunctions_1 = require("../src/listFunctions");
describe(`Testing 'Task' 1 -`, () => {
    const name = 'test name';
    const task1 = new Task_1.Task(name);
    const task2 = new Task_1.Task(name);
    const task3 = new Task_1.Task(name);
    test(`1.given a new Task we expect when calling "addTask" then the task is added in the array`, () => {
        const list = [];
        (0, listFunctions_1.addTask)(list, task1);
        const taskExpected = { name: 'test name', isDone: false };
        expect(list[0]).toEqual(taskExpected);
    });
    test(`2.given a new task when using "changeStatus" then we expect isDone to be true`, () => {
        const list = [];
        (0, listFunctions_1.addTask)(list, task1);
        (0, listFunctions_1.changeStatus)(list, 0);
        const taskExpected = { name: 'test name', isDone: true };
        expect(list[0]).toEqual(taskExpected);
    });
    test(`3.given a new task when using "deleteTask" then we expect the list to be empty`, () => {
        const list = [];
        (0, listFunctions_1.addTask)(list, task1);
        (0, listFunctions_1.deleteTask)(list, 0);
        const taskExpected = [];
        expect(list).toBeFalsy;
    });
});
//# sourceMappingURL=Task.test.js.map