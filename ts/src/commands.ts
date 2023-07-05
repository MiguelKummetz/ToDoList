import fs from 'node:fs';
import path from 'node:path'
import { addTask, verifyTask, deleteTask, mapList, changeStatus } from './listFunctions';
import { memoize } from './memoize';
import { Task } from "./Task"

const filePath = path.join(__dirname, './toDoList.json');

const readFile = (fileName: string) => {
    try {
        const buffer = fs.readFileSync(fileName)
        const jsonString = buffer.toString()
        const jsonObject = JSON.parse(jsonString)
        return jsonObject

    } catch (error) {
        return []
    }
}

const readFileMemo = memoize(readFile)

const writeFile = (fileName: string, content: Array <Task>) => {
    try {
        const jsonString = JSON.stringify(content)
        const buffer = Buffer.from(jsonString)
        fs.writeFileSync(fileName, buffer)
        // console.log('success writing')
    } catch (e) {
        console.log('error in the function writeFile')
    }
}
const writeFileMemo = memoize(writeFile)

export const addCommand = (name: string) => {
    // console.log(`command 'add' has been called`)

    const toDoList = readFileMemo(filePath)

    if (name === undefined){
        console.log('Please introduce a name for the Task.')
        process.exit()
    }
    const task = new Task(name)

    addTask(toDoList, task)

    writeFileMemo(filePath, toDoList)
    mapList(toDoList)
}

export const doneCommand = (index: number) => {
    // console.log(`command 'done' has been called`)

    const toDoList = readFileMemo(filePath)
    verifyTask(toDoList, index)
    changeStatus(toDoList, index)

    writeFileMemo(filePath, toDoList)
    mapList(toDoList)
}

export const removeCommand = (index: number) => {
    // console.log(`command 'remove' has been called`)

    let toDoList = readFileMemo(filePath)
    verifyTask(toDoList, index)
    deleteTask(toDoList, index)

    writeFileMemo(filePath, toDoList)
    mapList(toDoList)
}

export const printCommand = () => {
    // console.log(`command 'print' has been called`)

    const toDoList = readFileMemo(filePath)
    mapList(toDoList)
}

export const helpCommand = () => {
    // console.log(`command 'help' has benn called`)

    console.log(`
    List of commands:
        -add + 'name of the new task' => creates a new task
        -done + 'number of the task done' => change the status of the task
        -remove + 'number of the task to remove' => deletes the task
        -print => prints the full task list`)
}