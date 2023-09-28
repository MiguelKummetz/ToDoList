/* eslint-disable no-var */
import TaskModel from '../../core/TaskModel';
import { Request, Response } from 'express';
import AddTask from '../use-cases/AddTask';
import DeleteTask from '../use-cases/DeleteTask';
import CompleteTask from '../use-cases/CompleteTask';
import TaskRepositoryImpl from '../../infrastructure/TaskRepositoryImpl';

const taskRepository = new TaskRepositoryImpl();

export const addTask = async (request: Request, response: Response): Promise<void> => {
    try {
        const task = new TaskModel();
        const params = request.body;

        task.title = params.title;

        const addTaskUseCase = new AddTask(taskRepository);
        const newTask = await addTaskUseCase.execute(params.title);

        response.status(200).send({
            success: true,
            data: newTask
        });

    } catch (error) {
        const params = request.body;
        if (params.title.trim() === '') {
            response.status(404).send({
                success: false,
                error: 'Please enter a title',
            });
        }
        response.status(500).send({
            success: false,
            error: 'Error creating a task'
        });
    }
};

export const deleteTask = async (request: Request, response: Response): Promise<void> => {
    try {
        const taskId = request.params._id;
        const deleteTaskUseCase = new DeleteTask(taskRepository);
        var taskDeleted = await deleteTaskUseCase.delete(taskId);
        response.status(200).send({
            success: true,
            message: 'Task deleted successfully',
        });

    } catch (error) {
        if (taskDeleted === undefined) {
            response.status(404).send({
                success: false,
                error: 'Task not found',
            });
        } else {
            response.status(500).send({
                success: false,
                error: 'Error deleting the task',
            });
        }
    }
};

export const completeTask = async (request: Request, response: Response): Promise<void> => {
    try {
        const taskId = request.params._id;

        const markTaskCompletedUseCase = new CompleteTask(taskRepository);
        var taskCompleted = await markTaskCompletedUseCase.complete(taskId);
        response.status(200).send({
            success: true,
            message: 'Task completed succesfuly',
        });

    } catch (error) {
        if (taskCompleted === undefined) {
            response.status(404).send({
                success: false,
                error: 'Task not found',
            });
        } else {
            response.status(500).send({
                success: false,
                error: 'Error completing the task',
            });
        }
    }
};

export const findAll = async (request: Request, response: Response) => {
    try {
        const allTasks = await taskRepository.findAll();

        response.status(200).send({
            success: true,
            data: allTasks,
        });

    } catch (error) {
        response.status(500).send({
            success: false,
            error: 'Error showing all tasks'
        });
    }
};

export const findById = async (request: Request, response: Response) => {
    try {
        const taskId = request.params._id;
        var taskFinded = null;
        taskFinded = await taskRepository.findById(taskId);

        response.status(200).send({
            success: true,
            data: taskFinded,
        });

    } catch (error) { 
        if (taskFinded === null) {
            response.status(404).send({
                success: false,
                error: 'Task not found',
            });
        } else {
            response.status(500).send({
                success: false,
                error: 'Error finding the task',
            });
        }
    }
};
