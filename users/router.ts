import { Router } from "express";
import { AuthMiddleware, ParamsIdMiddleware } from "../middleware";
import { UserController } from './controller';

export const UserRouter: Router = Router();

UserRouter.get('', AuthMiddleware, UserController.List);
UserRouter.post('', AuthMiddleware, UserController.Create);
UserRouter.post('/login', UserController.Login);
UserRouter.post('/register', UserController.Register);
UserRouter.get('/:id', AuthMiddleware, ParamsIdMiddleware, UserController.GetOne);
UserRouter.put('/:id', AuthMiddleware, ParamsIdMiddleware, UserController.Update);
UserRouter.delete('/:id', AuthMiddleware, ParamsIdMiddleware, UserController.Delete);