import { DB } from "./instance";
import { DefineRelations } from "./relations";

export class DatabaseManager {
	static async Connect() {
		try {
			await DB.authenticate();
			await this.Sync();
			console.log('[Connecting to database]');
		} catch (error) {
			throw error;
		}
	}

	static async Sync() {
		try {
			await DB.sync();
			DefineRelations()
			console.log('[Syncing with database]');
		} catch (error) {
			throw error;
		}
	}

	static async Disconnect() {
		try {
			await DB.close();
			console.log('[Closing Connection to database]');
		} catch (error) {
			throw error;
		}
	}
}
