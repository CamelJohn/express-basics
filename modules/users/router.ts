import { Router } from "express";
import { AuthMiddleware, ParamsIdMiddleware } from "../../middleware";
import { UserController } from './controller';

export const UserRouter: Router = Router();

UserRouter.post('/login', UserController.Login);
UserRouter.post('/register', UserController.Register);

UserRouter.route('')
	.get(UserController.List)
	.post(UserController.Create);
UserRouter.route('/:id')
	.get(ParamsIdMiddleware, UserController.GetOne)
	.put(ParamsIdMiddleware, UserController.Update)
	.delete(ParamsIdMiddleware, UserController.Delete);