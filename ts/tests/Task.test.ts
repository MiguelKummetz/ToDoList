import { Task } from "../src/Task";

test(`given a name to a new Task we expect throw "toDTO" the correct created object`, () => {

    // given o arrange
    const name = 'test name'
    const task = new Task(name)

    // when o act
    const taskDTO = task.toDTO()
    
    // then o assert
    const taskExpected = { name, isDone: false, id:1}
    expect(taskDTO).toEqual(taskExpected);
});

test(`given a new task when using "changeStatus" we expect isDone to be true`, () => {

    const name = 'test name'
    const task = new Task(name)

    task.changeStatus()

    const {isDone} = task.toDTO() // destructuring
    expect(isDone).toBeTruthy
});

test(`given a name to a two new Task we expect throw "toDTO" see the correct ID assingment`, () => {

    // given o arrange
    const name = 'test name'
    const task1 = new Task(name)
    const task2 = new Task(name)
    const task3 = new Task(name)

    // when o act
    const taskDTO1 = task3.toDTO()
    
    
    // then o assert
    const taskExpected = 5
    expect(taskDTO1.id).toEqual(taskExpected);
});


// given o arrange

// when o act

// then o assert