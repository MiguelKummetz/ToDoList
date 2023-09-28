import TaskModel from '../core/TaskModel';
import {Task} from '../core/Task';
import TaskRepository from '../core/TaskRepositories';

export default class TaskRepositoryImpl implements TaskRepository {
    async addTask(newTask: Task): Promise<void> {
        await TaskModel.create(newTask);
    }

    async findAll(): Promise<Task[]> {
        return TaskModel.find();
    }

    async findById(_id: string): Promise<Task | null> {
        return TaskModel.findById(_id);        
    }

    async updateTask(task: Task): Promise<void> {
        await TaskModel.findByIdAndUpdate(task);
    }
    
    async completeTask(_id: string): Promise<void> {
        await TaskModel.findByIdAndUpdate(_id, { completed: true});
    }

    async deleteTask(_id: string): Promise<void> {
        await TaskModel.findByIdAndDelete(_id);
    }
}