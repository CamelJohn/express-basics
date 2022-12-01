import { NextFunction, Request, Response } from 'express';
import { HttpResponseStatus } from '../http/response';
import { UserService } from './service';
import { CreateUserDto, EntityUrlParam, UserResponse, UpdateUserDto, ListUserResponse, LoginUserDto, RegisterUserDto } from './types';

export class UserController {
	static async GetOne(req: Request<EntityUrlParam | any>, res: Response<UserResponse>, next: NextFunction) {
		try {
			const user = await UserService.GetOne(req.params.id);
			res.status(HttpResponseStatus.OK).send({ user });
		} catch (error) {
			next(error);
		}
	}

	static async List(req: Request, res: Response<ListUserResponse>, next: NextFunction) {
		try {
			const users = await UserService.List();
			res.status(HttpResponseStatus.OK).send({ ...users });
		} catch (error) {
			next(error);
		}
	}

	static async Update(req: Request<EntityUrlParam | any, any, UpdateUserDto>, res: Response<{ message: string }>, next: NextFunction) {
		try {
			const message = await UserService.Update(req.params.id, req.body.user);

			res.status(HttpResponseStatus.UPDATED).send({ message });
		} catch (error) {
			next(error);
		}
	}

	static async Delete(req: Request<EntityUrlParam | any>, res: Response, next: NextFunction) {
		try {
			const result = await UserService.Delete(req.params.id);

			res.status(HttpResponseStatus.UPDATED).send({ message: result });
		} catch (error) {
			next(error);
		}
	}

	static async Create(req: Request<any, any, CreateUserDto>, res: Response<UserResponse>, next: NextFunction) {
		try {
			const user = await UserService.Create(req.body.user);

			res.status(HttpResponseStatus.CREATED).send({ user });
		} catch (error) {
			next(error);
		}
	}

	static async Login(req: Request<any, any, LoginUserDto>, res: Response<UserResponse>, next: NextFunction) {
		try {
			const user = await UserService.Login(req.body);

			res.status(HttpResponseStatus.CREATED).send({ user });
		} catch (error) {
			next(error);
		}
	}
	
	static async Register(req: Request<any, any, RegisterUserDto>, res: Response<UserResponse>, next: NextFunction) {
		try {
			const user = await UserService.Register(req.body);

			res.status(HttpResponseStatus.CREATED).send({ user });
		} catch (error) {
			next(error);
		}
	}
}

