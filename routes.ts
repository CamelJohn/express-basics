import express, { NextFunction, Request, Response, Router } from 'express';

export const MainRouter: Router = express.Router();

MainRouter.get('', (req: Request, res: Response, next: NextFunction) => {
	res.status(200).send({
		message: `hello from the ${req.method.toUpperCase()} route`,
		path: `${req.originalUrl}`,
	});
});

MainRouter.post('', (req: Request, res: Response, next: NextFunction) => {
	const [, token] = req.headers.authorization?.split(' ') || '';
	res.status(200).send({
		message: `hello from the ${req.method.toUpperCase()} route`,
		body: req.body,
		token,
		path: `${req.originalUrl}`,
	});
});

MainRouter.put('/:id', (req: Request, res: Response, next: NextFunction) => {
	const [, token] = req.headers.authorization?.split(' ') || '';
	res.status(200).send({
		message: `hello from the ${req.method.toUpperCase()} route`,
		body: req.body,
		token,
		entityId: parseInt(req.params.id, 10),
		path: `${req.originalUrl}`,
	});
});

MainRouter.patch('/:id', (req: Request, res: Response, next: NextFunction) => {
	const [, token] = req.headers.authorization?.split(' ') || '';
	res.status(200).send({
		message: `hello from the ${req.method.toUpperCase()} route`,
		body: req.body,
		token,
		entityId: parseInt(req.params.id, 10),
		path: `${req.originalUrl}`,
	});
});

MainRouter.delete('/:id', (req: Request, res: Response, next: NextFunction) => {
	const [, token] = req.headers.authorization?.split(' ') || '';
	res.status(200).send({
		message: `hello from the ${req.method.toUpperCase()} route`,
		token,
		entityId: parseInt(req.params.id, 10),
		path: `${req.originalUrl}`,
	});
});
