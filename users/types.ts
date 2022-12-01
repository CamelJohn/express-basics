export interface User {
	id: number;
	username: string;
	email: string;
	password: string;
	token: string;
}

export interface RegisterUserDto {
	user: Omit<User, 'id' | 'token'>;
}

export interface RegisterUserWithTokenDto {
	user: Omit<User, 'id'>;
}

export interface LoginUserDto {
	user: Omit<User, 'id' | 'username'>;
}

export interface CreateUserDto {
	user: {
		name: string;
		description: string;
	};
}

export interface UpdateUserDto {
	user: {
		name?: string;
		description?: string;
	};
}

export interface EntityUrlParam {
	id: string;
}

export interface ListUserResponse {
	users: User[];
	count: number;
}

export interface UserResponse {
	user: User;
}

