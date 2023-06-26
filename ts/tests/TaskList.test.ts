import { Task } from "../src/Task";
import { TaskList } from "../src/TaskList";


describe(`Testing 'TaskList' 2 -`, () => {
    const task1 = new Task('test name')
    const task2 = new Task('Task to delete')
    const task3 = new Task('Task to be find')
    
    test(`1.given a new task when using "add" then we expect the list with the object in it`, () => {    
        const list1 = new TaskList;

        list1.addTask(task1)

        const listExpected = {'list':[task1]}
        expect(list1).toEqual(listExpected);
    });

    test(`2.given two new tasks when using "add" then we expect the list with the objects in it`, () => {
        const list1 = new TaskList;

        list1.addTask(task2)

        const listExpected = {'list':[task2]}
        expect(list1).toEqual(listExpected);
    });

    test(`3.given a new tasks when using "delete" then we expect the list empty`, () => {
        const list1 = new TaskList;

        list1.addTask(task1)
        list1.addTask(task2)
        list1.deleteTask(0)
    
        const listExpected = {"list":[task2]}
        expect(list1).toEqual(listExpected);
    });
    
    test('4.given a list of tasks when using "find()" then we expect to get te correct task', () => {
        const list1 = new TaskList;
    
        list1.addTask(task1)
        list1.addTask(task2)
        list1.addTask(task3)
        
        const findedTask = list1.findTask(2)
        const taskExpected = {"isDone": false, "name": "Task to be find"}
        
        expect(findedTask).toEqual(taskExpected)
    })

    test(`5.given a new tasks when using "delete" then we expect the first place of the array to be empty`, () => {
        const list1 = new TaskList
    
        list1.addTask(task1)
        list1.addTask(task2)
        list1.addTask(task3)
        list1.deleteTask(1)
    
        const result = list1
        const listExpected = {"list":[task1, task3]}

        expect(result).toEqual(listExpected);
    });

    test(`6.given a list with tasks using "mapList" then we expect the list to be showed in console`, () => {
        const list1 = new TaskList
    
        list1.addTask(task1)
        list1.addTask(task2)
        list1.addTask(task3)

        task2.changeStatus()

        const expectedList = 
        `1.test name: ⭕\n2.Task to delete: ✅\n3.Task to be find: ⭕\n`

        const result = list1.mapList()
    
        expect(result).toEqual(expectedList)
    })
});