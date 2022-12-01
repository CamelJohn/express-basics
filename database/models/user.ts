import { DataTypes } from "sequelize";
import { DB } from "../instance";

export const User = DB.define('user', {
	id: {
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		type: DataTypes.INTEGER
	},
	username: {
		allowNull: false,
		type: DataTypes.STRING
	},
	email: {
		allowNull: false,
		type: DataTypes.STRING
	},
	password: {
		allowNull: false,
		type: DataTypes.STRING
	},
	token: {
		allowNull: false,
		type: DataTypes.STRING
	}
}, {
	timestamps: true
});