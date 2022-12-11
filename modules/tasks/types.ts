export interface Task {
	id: number;
	name: string;
	description: string;
}

export interface CreateTaskDto {
	task: {
		name: string;
		description: string;
	};
}

export interface UpdateTaskDto {
	task: {
		name?: string;
		description?: string;
	};
}

export interface ListTaskResponse {
	tasks: Task[];
	count: number;
}

export interface TaskResponse {
	task: Task;
}

