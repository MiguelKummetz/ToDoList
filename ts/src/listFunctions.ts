import { Task } from "./Task";

export function addTask (array: Array <Task>,task: Task) {
    array.push(task)
}

export function verifyTask (array: Array <Task>, index: number) {
        
    const foundTask = array[index]
    // console.log('verifying...')
    if (foundTask === undefined){
        console.log('Task not found.')
        process.exit()
    }
    // console.log('verification complete')
}
export function deleteTask (array: Array <Task>, index: number) {
        array.splice( index, 1)
    }
    
export function mapList (array: Array <any>) {
    let formatedList: string = '';

    for (let i :number = 0; i < array.length; i++) {
        const taskDTOName = array[i].name
        const taskDTOisDone = array[i].isDone
        let isDone: string;
        taskDTOisDone? isDone = '✅' : isDone = '⭕'
        const formatedTask: string = `${i + 1}.${taskDTOName}: ${isDone}\n`

        formatedList += formatedTask
    }
    console.log(formatedList)
    return formatedList;
    }

export function changeStatus(array: Array <any>, index: number) {
    array[index].isDone = !array[index].isDone
}