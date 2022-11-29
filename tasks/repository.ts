import { CreateTaskDto, Task, UpdateTaskDto } from './types';
import { Conflict, NotFound } from '../http';

export class TaskRepository {

	private static InMemoryDatabase = new Map<number, Task>([]);

	static GetOne(id: number) {
		try {
			if (!this.InMemoryDatabase.has(id)) {
				throw new NotFound()
			}

			if (this.InMemoryDatabase.get(id)) {
				return this.InMemoryDatabase.get(id);
			} 
		} catch (error) {
			throw error;
		}
	}
	static List() {
		try {
			const count = this.InMemoryDatabase.size;
			const tasks: Task[] = [];
			this.InMemoryDatabase.forEach(task => tasks.push(task));

			return {
				count,
				tasks
			}
		} catch (error) {
			throw error;
		}
	}
	
	static Update(entityId: number, taskDto: UpdateTaskDto['task']) {
		try {
			if (!this.InMemoryDatabase.has(entityId)) {
				throw new NotFound();
			}

			const oldTask = this.InMemoryDatabase.get(entityId)!;
			
			const newTask = { ...oldTask, ...taskDto }

			this.InMemoryDatabase.set(entityId, newTask);

			return newTask;

		} catch (error) {
			throw error;
		}
	}
	
	static Delete(entityId: number) {
		try {
			if (!this.InMemoryDatabase.has(entityId)) {
				throw new NotFound();
			}

			this.InMemoryDatabase.delete(entityId);

			return true;

		} catch (error) {
			return false;
		}
	}
	
	static Create(taskDto: CreateTaskDto['task']) {
		try {
			this.InMemoryDatabase.forEach(k => {
				if (k.name === taskDto.name) {
					throw new Conflict();
				}
			})
			const id = this.InMemoryDatabase.size + 1;
			const task = { id, ...taskDto };

			this.InMemoryDatabase.set(id, task);

			return task;
		} catch (error) {
			throw error;
		}
	}
}