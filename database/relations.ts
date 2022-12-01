import { TaskSchema, UserSchema } from './models';

export function DefineRelations() {
	try {
		TaskSchema.belongsTo(UserSchema);

		TaskSchema.sync();
		UserSchema.sync();
	} catch (error) {
		console.log(error);
		throw error;
	}
}