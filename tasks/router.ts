import { Router } from "express";
import { TaskController } from './controller';

export const TaskRouter: Router = Router();

TaskRouter.get('', TaskController.List);
TaskRouter.post('', TaskController.Create);
TaskRouter.get('/:id', TaskController.GetOne);
TaskRouter.put('/:id', TaskController.Update);
TaskRouter.delete('/:id', TaskController.Delete);