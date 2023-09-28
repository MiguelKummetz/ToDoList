import TaskRepository from '../../core/TaskRepositories';

export default class CompleteTask {
    private taskRepository: TaskRepository;

    constructor (taskRepository: TaskRepository) {
        this.taskRepository = taskRepository;
    }

    async complete (_id: string) {
        await this.taskRepository.completeTask(_id);
    }
}