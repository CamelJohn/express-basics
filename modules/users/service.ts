import { UserRepository } from "./repository";
import { CreateUserDto, LoginUserDto, RegisterUserDto, UpdateUserDto } from "./types";
import { NotFound, Unprocessable } from '../../http';
import { BcryptService, JWTService } from "../../services";

export class UserService {
	static GetOne(entityId: string) {
		try {
			const id = parseInt(entityId, 10);

			return UserRepository.GetOne(id);

		} catch (error) {
			throw error;
		}
	}
	static List() {
		try {
			return UserRepository.List();
		} catch (error) {
			throw error;
		}
	}
	
	static async Update(entityId: string, userDto: UpdateUserDto['user']) {
		try {
			const id = parseInt(entityId, 10);

			const result = await UserRepository.Update(id, userDto);

			return `user was ${result ? 'updated' : 'not updated'}.`;

		} catch (error) {
			throw error;
		}
	}
	
	static async Delete(entityId: string) {
		try {
			if (entityId.trim().length === 0) {
				throw new Unprocessable();
			}

			if (Number(entityId) < 0) {
				throw new NotFound();
			}

			const id = parseInt(entityId, 10);

			const result = await UserRepository.Delete(id);

			return `User was ${result ? 'deleted' : 'not deleted'}.`;
		} catch (error) {
			throw error;
		}
	}
	
	static Create(userDto: CreateUserDto['user']) {
		try {
			return UserRepository.Create(userDto);
		} catch (error) {
			throw error;
		}
	}

	static async Register(userDto: RegisterUserDto) {
		try {
			const hashPassword = await BcryptService.Hash(userDto.user.password);
			const token = await JWTService.Sign(userDto.user.email);

			return UserRepository.Register({
				...userDto.user,
				password: hashPassword,
				token
			});
		} catch (error) {
			throw error;
		}
	}

	static async Login(userDto: LoginUserDto) {
		try {
			return UserRepository.Login(userDto);
		} catch (error) {
			throw error;
		}
	}
}