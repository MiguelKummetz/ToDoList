import { Task } from "../src/Task";
import { addTask, changeStatus, deleteTask } from "../src/listFunctions";


describe(`Testing 'Task' 1 -`, () => {
    const name = 'test name'
    const task1 = new Task(name)
    const task2 = new Task(name)
    const task3 = new Task(name)
    
    test(`1.given a new Task we expect when calling "addTask" then the task is added in the array`, () => {
        
        // given o arrange
        const list: Task[] = []
        // when o act
        addTask(list, task1)
        // then o assert
        const taskExpected = { name: 'test name', isDone: false}
        expect(list[0]).toEqual(taskExpected);
    });

    test(`2.given a new task when using "changeStatus" then we expect isDone to be true`, () => {
    
        const list: Task[] = []
        addTask(list, task1)
        changeStatus(list, 0)
        const taskExpected = { name: 'test name', isDone: true}
        expect(list[0]).toEqual(taskExpected);
    });

    test(`3.given a new task when using "deleteTask" then we expect the list to be empty`, () => {

        const list: Task[] = []
        addTask(list, task1)
        deleteTask(list, 0)
        expect(list).toBeFalsy
    });

  });