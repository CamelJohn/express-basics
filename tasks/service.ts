import { TaskRepository } from "./repository";
import { CreateTaskDto, UpdateTaskDto } from "./types";
import { NotFound, Unprocessable } from '../http';

export class TaskService {
	static GetOne(entityId: string) {
		try {
			const id = parseInt(entityId, 10);

			return TaskRepository.GetOne(id);

		} catch (error) {
			throw error;
		}
	}
	static List() {
		try {
			return TaskRepository.List();
		} catch (error) {
			throw error;
		}
	}
	
	static async Update(entityId: string, taskDto: UpdateTaskDto['task']) {
		try {
			const id = parseInt(entityId, 10);

			const result = await TaskRepository.Update(id, taskDto);

			return `Task was ${result ? 'updated' : 'not updated'}.`;

		} catch (error) {
			throw error;
		}
	}
	
	static async Delete(entityId: string) {
		try {
			if (entityId.trim().length === 0) {
				throw new Unprocessable();
			}

			if (Number(entityId) < 0) {
				throw new NotFound();
			}

			const id = parseInt(entityId, 10);

			const result = await TaskRepository.Delete(id);

			return `Task was ${result ? 'deleted' : 'not deleted'}.`;
		} catch (error) {
			throw error;
		}
	}
	
	static Create(taskDto: CreateTaskDto['task']) {
		try {
			return TaskRepository.Create(taskDto);
		} catch (error) {
			throw error;
		}
	}
}