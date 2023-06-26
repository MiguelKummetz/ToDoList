import { Task } from "./Task"
import { TaskList } from "./TaskList"

const list1 = new TaskList
const task1 = new Task('test name')
const task2 = new Task('Task to delete')
const task3 = new Task('Task to be find')

list1.addTask(task1)
list1.addTask(task2)
list1.addTask(task3)

task2.changeStatus()

list1.mapList()