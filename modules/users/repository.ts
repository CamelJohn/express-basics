import { CreateUserDto, User, UpdateUserDto, RegisterUserDto, LoginUserDto, RegisterUserWithTokenDto } from './types';
import { Conflict, NotFound, Unauthorized } from '../../http';
import { UserSchema } from '../../database'
import { Model } from 'sequelize';
import { BcryptService } from '../../services';

export class UserRepository {
	static async GetOne(id: number) {
		try {
			const raw = await UserSchema.findOne({ where: { id } });

			if (!raw) {
				throw new NotFound();
			}

			return raw.toJSON<User>();
		} catch (error) {
			throw error;
		}
	}

	static async List() {
		try {
			const raw = await UserSchema.findAndCountAll<Model<User>>({ raw: false });

			return {
				count: raw.count,
				users: raw.rows.map(r => r.toJSON<User>())
			}

		} catch (error) {
			throw error;
		}
	}
	
	static async Update(entityId: number, userDto: UpdateUserDto['user']) {
		try {
			const [result] = await UserSchema.update({ ...userDto }, { where: { id: entityId } });

			return result;

		} catch (error) {
			throw error;
		}
	}
	
	static async Delete(entityId: number) {
		try {
			const user = await UserSchema.destroy({ where: { id: entityId } });

			return user === 1;
		} catch (error) {
			throw error;
		}
	}
	
	static async Create(userDto: CreateUserDto['user']) {
		try {
			const user = await UserSchema.create({ ...userDto }, { returning: true });

			return user.toJSON<User>();
		} catch (error) {
			throw error;
		}
	}
	
	static async Register(userDto: RegisterUserWithTokenDto['user']) {
		try {
			const exists = await UserSchema.findOne({ where: { email: userDto.email } });
			
			if (exists) {
				throw new Conflict();
			}

			const user = await UserSchema.create({ ...userDto });

			return user.toJSON<User>();
		} catch (error) {
			throw error;
		}
	}
	
	static async Login(userDto: LoginUserDto) {
		try {
			const exists = await UserSchema.findOne({
				where: {
					email: userDto.user.email,
					token: userDto.user.token
				}
			});

			if (!exists) {
				throw new Unauthorized();
			}

			const user = exists.toJSON<User>();

			const isAuthorized = await BcryptService.AreSame(
				userDto.user.password,
				user.password
			);

			if (!isAuthorized) {
				throw new Unauthorized();
			}

			return user;
		} catch (error) {
			throw error;
		}
	}
}