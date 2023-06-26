import { Task } from "./Task"

export class TaskList {
    list: Array<Task | null>

    constructor () {
        this.list = []
    }

    addTask (task: Task) {
        this.list.push(task)
    }

    findTask (index: number) {
        
        const foundTask = this.list[index]
        if (foundTask) {
            return foundTask;
          }
            console.log("Objeto no encontrado.");
          }
        
    deleteTask (index: number) {
            this.list.splice( index, 1)
        }
        
    mapList () {
        let formatedList: string = '';
        for (let i :number = 0; i < this.list.length; i++) {
            const taskDTOName = this.list[i]?.toDTO().name
            const taskDTOisDone = this.list[i]?.toDTO().isDone
            let isDone: string;
            taskDTOisDone? isDone = '✅' : isDone = '⭕'
            const formatedTask: string = `${i + 1}.${taskDTOName}: ${isDone}\n`

            formatedList += formatedTask
        }
        return formatedList;
        }
    }
