import { Task, User } from './models';

export function DefineRelations() {
	try {
		Task.belongsTo(User);

		Task.sync();
		User.sync();
	} catch (error) {
		console.log(error);
		throw error;
	}
}