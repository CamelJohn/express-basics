import bcrypt from 'bcrypt';

export class BcryptService {
	static async Hash(password: string) {
		try {
			const salt = await bcrypt.genSalt(12);
			const hashed = await bcrypt.hash(password, salt);
			return hashed;
		} catch (error) {
			throw error;
		}
	}

	static async AreSame(plain: string, hashed: string) {
		try {
			return bcrypt.compare(plain, hashed);
		} catch (error) {
			throw error;
		}
	}
}