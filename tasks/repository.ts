import { CreateTaskDto, Task, UpdateTaskDto } from './types';
import { Conflict, NotFound } from '../http';
import { TaskSchema } from '../database'
import { Model } from 'sequelize';

export class TaskRepository {
	static async GetOne(id: number) {
		try {
			const raw = await TaskSchema.findOne({ where: { id } });

			if (!raw) {
				throw new NotFound();
			}

			return raw.toJSON<Task>();
		} catch (error) {
			throw error;
		}
	}

	static async List() {
		try {
			const raw = await TaskSchema.findAndCountAll<Model<Task>>({ raw: false });

			return {
				count: raw.count,
				tasks: raw.rows.map(r => r.toJSON<Task>())
			}

		} catch (error) {
			throw error;
		}
	}
	
	static async Update(entityId: number, taskDto: UpdateTaskDto['task']) {
		try {
			const [result] = await TaskSchema.update({ ...taskDto }, { where: { id: entityId } });

			return result;

		} catch (error) {
			throw error;
		}
	}
	
	static async Delete(entityId: number) {
		try {
			const task = await TaskSchema.destroy({ where: { id: entityId } });

			return task === 1;
		} catch (error) {
			throw error;
		}
	}
	
	static async Create(taskDto: CreateTaskDto['task']) {
		try {
			const task = await TaskSchema.create({ ...taskDto }, { returning: true });

			return task.toJSON<Task>();
		} catch (error) {
			throw error;
		}
	}
}