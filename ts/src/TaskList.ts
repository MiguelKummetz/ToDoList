import { Task } from "./Task"

export class TaskList {
    list: Array<Task | null>

    constructor () {
        this.list = []
    }

    add (task: Task) {
        this.list.push(task)
    }

    find (index: number) {

        return this.list.find(obj => obj?.id === index)
        
    }

    delete (index: number) {
        this.list.splice( index, 1)
    }

    mapList () {

    }
}