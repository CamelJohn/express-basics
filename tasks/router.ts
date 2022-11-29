import { Router } from "express";
import { ParamsIdMiddleware } from "../middleware";
import { TaskController } from './controller';

export const TaskRouter: Router = Router();

TaskRouter.get('', TaskController.List);
TaskRouter.post('', TaskController.Create);
TaskRouter.get('/:id', ParamsIdMiddleware, TaskController.GetOne);
TaskRouter.put('/:id', ParamsIdMiddleware, TaskController.Update);
TaskRouter.delete('/:id', ParamsIdMiddleware, TaskController.Delete);