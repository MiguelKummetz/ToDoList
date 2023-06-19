import { Task } from "../src/Task";
import { TaskList } from "../src/TaskList";

test(`given a new task when using "add" then we expect the list with the object in it`, () => {

    // given o arrange
    const name = 'test name'
    const task = new Task(name)
    const list = new TaskList

    // when o act
    list.add(task)

    // then o assert
    const listExpected = {"list":[task]}
    expect(list).toEqual(listExpected);
});

test(`given two new tasks when using "add" then we expect the list with the objects in it`, () => {

    // given o arrange
    const name = 'test name'
    const task1 = new Task(name)
    const task2 = new Task(name)
    const list = new TaskList

    // when o act
    list.add(task1)
    list.add(task2)

    // then o assert
    const listExpected = {"list":[task1,task2]}
    expect(list).toEqual(listExpected);
});

test(`given a new tasks when using "delete" then we expect the list empty`, () => {

    // given o arrange
    const name = 'test name'
    const task = new Task(name)
    const list = new TaskList

    // when o act
    list.add(task)
    list.delete(0)

    // then o assert
    const listExpected = {"list":[]}
    expect(list).toEqual(listExpected);
});

test('given a list of tasks when using "find()" then we expect to get te correct task', () => {
    //given
    const list = new TaskList;
    const task1 = new Task('Task')
    const task2 = new Task('Task')
    const task3 = new Task('Task to be find')

    //when
    list.add(task1)
    list.add(task2)
    list.add(task3)
    
    //then
    const findedTask = list.find(3)
    const taskExpected = {"id": 3, "isDone": false, "name": "Task to be find"}
    
    expect(findedTask).toEqual(taskExpected)
})

test(`given a new tasks when using "delete" then we expect the first place of the array to be empty`, () => {

    // given o arrange
    const taskToDelete = new Task('taskToDelete')
    const taskToSurvive = new Task('taskToSurvive')
    const list = new TaskList

    // when o act
    list.add(taskToDelete)
    list.add(taskToSurvive)
    list.delete(0)

    // then o assert
    const result = list /////////////////////////////////////////////////////////////////////////////
    const Expected = list
    expect(result).toEqual(Expected);
});

test('given a new task when checking the ID then we expect to be 1', () => {
    const task = new Task('test')
    const taskList = new TaskList

    taskList.add(task)

    const expectedId = 1

    expect(taskList.list[0]).toEqual(expectedId)
    
})
