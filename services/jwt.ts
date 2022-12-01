import JWT from 'jsonwebtoken';
import { EnvSrevice } from './env';

export class JWTService {
	static async Sign(payload: string) {
		try {
			const secret = EnvSrevice.get({
				variable: 'DEV_JWT_SECRET',
				defaultValue: ''
			});
		
			return JWT.sign(payload, secret, { encoding: 'utf8' });
		} catch (error) {
			console.log({ error })
			throw error;
		}
	}
	static async Verify(token: string) {
		try {
			const secret = EnvSrevice.get({
				variable: 'DEV_JWT_SECRET',
				defaultValue: ''
			});

			return JWT.verify(token, secret);
		} catch (error) {
			throw error;
		}
	}
}