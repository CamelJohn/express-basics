import { DataTypes } from "sequelize";
import { DB } from "../instance";

export const TaskSchema = DB.define('task', {
	id: {
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		type: DataTypes.INTEGER
	},
	name: {
		allowNull: false,
		type: DataTypes.STRING
	},
	description: {
		allowNull: false,
		type: DataTypes.STRING
	},
	userId: {
		allowNull: true,
		type: DataTypes.INTEGER
	}
}, {
	timestamps: true
});