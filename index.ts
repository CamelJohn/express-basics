import express, { Express, NextFunction, Request, Response } from 'express';
import { AuthMiddleware, BasicMiddleware, ErrorMiddleware, HealthMiddleware } from './middleware';
import { MainRouter } from './routes';

const webServer: Express = express();

const PORT: number = 3000;

webServer.use(BasicMiddleware);

webServer.use('/health', HealthMiddleware);

webServer.use(AuthMiddleware);

webServer.use('/main', MainRouter);

webServer.get('/', (req: Request, res: Response, next: NextFunction) => {
	res.status(200).send({
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