import express, { Express, NextFunction, Request, Response } from 'express';
import { getPortFromConfig } from './env';
import { HttpResponseStatus } from './http';
import { AuthMiddleware, BasicMiddleware, ErrorMiddleware, HealthMiddleware } from './middleware';
import { MainRouter } from './routes';
import { TaskRouter } from './tasks/router';

const webServer: Express = express();

const PORT: number = getPortFromConfig();

webServer.use(BasicMiddleware);

webServer.use('/health', HealthMiddleware);

webServer.use(AuthMiddleware);

webServer.use('/main', MainRouter);

webServer.use('/tasks', TaskRouter);

webServer.get('/', (req: Request, res: Response, next: NextFunction) => {
	res.status(HttpResponseStatus.OK).send({
		message: 'hello from our sever',
		route: req.protocol.concat('://', req.hostname, ':3000', req.url)
	})
})

webServer.get('/error', (req: Request, res: Response, next: NextFunction) => {
	try {
		throw new Error('manually triggered error');
	} catch (error) {
		next(error);
	}
})

webServer.use(ErrorMiddleware)

webServer.listen(PORT, () =>
	console.log('Webserver Listening on port:', PORT, `at http://localhost:${PORT}`));