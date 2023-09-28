import { Task } from '../../core/Task';
import type TaskRepository from '../../core/TaskRepositories';

export default class AddTask {
    private readonly taskRepository: TaskRepository;

    constructor (taskRepository: TaskRepository) {
        this.taskRepository = taskRepository;
    }

    async execute (title: string): Promise<object> {
        const newTask = new Task(title);
        await this.taskRepository.addTask(newTask);
        return newTask;
    }
}
