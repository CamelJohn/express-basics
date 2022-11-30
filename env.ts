import dotenv from 'dotenv';

export function getPortFromConfig() {
	const config = dotenv.config({ encoding: 'utf8' });

	if (config.error) {
		throw config.error;
	}

	if (!process.env.DEV_PORT) {
		return 3005;
	}

	return parseInt(process.env.DEV_PORT, 10);
}

