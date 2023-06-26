import { Task } from "../src/Task";

describe(`Testing 'Task' 1 -`, () => {
    const name = 'test name'
    const task1 = new Task(name)
    const task2 = new Task(name)
    const task3 = new Task(name)
    
    test(`1.given a name to a new Task we expect throw "toDTO" the correct created object`, () => {
        
        // given o arrange
    
        // when o act
        const taskDTO = task1.toDTO()
        
        // then o assert
        const taskExpected = { name: 'test name', isDone: false}
        expect(taskDTO).toEqual(taskExpected);
    });

    test(`2.given a new task when using "changeStatus" we expect isDone to be true`, () => {
    
        task1.changeStatus()
    
        const {isDone} = task1.toDTO() // destructuring
        expect(isDone).toBeTruthy
    });

    test(`3.given a name to a two new Task we expect throw "toDTO" see the correct ID assingment`, () => {

        // given o arrange
    
        // when o act
        const taskDTO = task3.toDTO()
        
        // then o assert
        const taskExpected = 'test name'
        expect(taskDTO.name).toEqual(taskExpected);
    });

  });