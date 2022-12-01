import { Sequelize } from "sequelize";

export const DB = new Sequelize({
	dialect: 'sqlite',
	storage: './database/db.sqlite3'
})