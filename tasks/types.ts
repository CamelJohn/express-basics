export interface Task {
	id: number;
	name: string;
	owner: string;
}

export interface CreateTaskDto {
	task: {
		name: string;
		owner: string;
	};
}

export interface UpdateTaskDto {
	task: {
		name?: string;
		owner?: string;
	};
}

export interface EntityUrlParam {
	id: string;
}

export interface ListTaskResponse {
	tasks: Task[];
	count: number;
}

export interface TaskResponse {
	task: Task;
}

