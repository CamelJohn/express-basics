import express, { Router } from 'express';
import { TaskRouter, UserRouter } from './modules';

export const MainRouter: Router = express.Router();

MainRouter.use('/tasks', TaskRouter);
MainRouter.use('/users', UserRouter);