/* eslint-disable semi */
import { Task } from './Task';

export default interface TaskRepository {
    addTask(newTask: Task): Promise<void>;
    findAll(): Promise<Task[]>;
    findById(_id: string): Promise<Task | null>;
    completeTask(_id: string): Promise<void>;
    deleteTask(_id: string): Promise<void>;
}
