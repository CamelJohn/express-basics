import { TaskRepository } from "./repository";
import { CreateTaskDto, UpdateTaskDto } from "./types";

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
	
	static Update(entityId: string, taskDto: UpdateTaskDto['task']) {
		try {
			const id = parseInt(entityId, 10);

			return TaskRepository.Update(id, taskDto);
		} catch (error) {
			throw error;
		}
	}
	
	static Delete(entityId: string) {
		try {
			if (entityId.trim().length === 0) {
				throw new Error('no id was provied');
			}

			if (Number(entityId) < 0) {
				throw new Error('no entity with such id can exist');
			}

			const id = parseInt(entityId, 10);

			const result = TaskRepository.Delete(id);

			return `Task was ${result ? '' : 'not'} deleted.`;
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