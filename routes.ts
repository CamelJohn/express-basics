import express, { Router } from 'express';
import { AuthMiddleware } from './middleware';
import { TaskRouter } from './tasks';
import { UserRouter } from './users';

export const MainRouter: Router = express.Router();

MainRouter.use('/tasks', AuthMiddleware, TaskRouter);
MainRouter.use('/users', UserRouter);