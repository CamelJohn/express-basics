import express, { Express, NextFunction, Request, Response } from 'express';
import { DatabaseManager } from './database';
import { HttpResponseStatus } from './http';
import { AuthMiddleware, BasicMiddleware, ErrorMiddleware, HealthMiddleware } from './middleware';
import { MainRouter } from './routes';
import { EnvSrevice } from './services/env';
import { TaskRouter } from './tasks/router';

async function Server() {
	try {
		const webServer: Express = express();

		const PORT: number = EnvSrevice.get({
			variable: 'ENV_PORT',
			defaultValue: 3000,
			mapper: (arg: string) => parseInt(arg, 10),
		});

		await DatabaseManager.Connect();

		webServer.use(BasicMiddleware);

		webServer.use('/health', HealthMiddleware);

		webServer.use(AuthMiddleware);

		webServer.use('/main', MainRouter);

		webServer.use('/tasks', TaskRouter);

		webServer.get('/', (req: Request, res: Response, next: NextFunction) => {
			res.status(HttpResponseStatus.OK).send({
				message: 'hello from our sever',
				route: req.protocol.concat('://', req.hostname, ':', PORT.toString(), req.url),
			});
		});

		webServer.get('/error', (req: Request, res: Response, next: NextFunction) => {
			try {
				throw new Error('manually triggered error');
			} catch (error) {
				next(error);
			}
		});

		webServer.use(ErrorMiddleware);

		webServer.listen(PORT, () => console.log('Webserver Listening on port:', PORT, `at http://localhost:${PORT}`));
	} catch (error) {
		console.log(error);
		await DatabaseManager.Disconnect();
		process.exit(1);
	}
}


Server();