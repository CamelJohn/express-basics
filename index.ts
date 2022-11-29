import express, { Express, json, NextFunction, Request, Response, urlencoded } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

const webServer: Express = express();

const PORT: number = 3000;

webServer.use(json(), urlencoded({ extended: true }), cors(), helmet(), morgan('dev'));

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

webServer.use((error: Error, req: Request, res: Response, next: NextFunction) => {
	res.status(500).send({
		message: error.message
	})
})

webServer.listen(PORT, () =>
	console.log('Webserver Listening on port:', PORT, `at http://localhost:${PORT}`));