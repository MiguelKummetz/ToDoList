import type TaskRepository from '../../core/TaskRepositories';
export default class DeleteTask {
    private readonly taskRepository: TaskRepository;

    constructor (taskRepository: TaskRepository) {
        this.taskRepository = taskRepository;
    }

    async delete (_id: string): Promise<void> {
        await this.taskRepository.deleteTask(_id);
    }
}
