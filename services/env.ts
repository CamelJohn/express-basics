import dotenv from 'dotenv';

interface GetArguments<T> {
	variable: string;
	defaultValue: T;
	mapper?: (arg: any) => T;
}

export class EnvSrevice {
	static get<T>({ variable, defaultValue, mapper }: GetArguments<T>) {
		const config = dotenv.config({ encoding: 'utf8' });

		if (config.error) {
			throw config.error;
		}

		const env_var = process.env[variable];

		if (!env_var) {
			return defaultValue;
		}

		if (mapper) {
			return mapper(env_var);
		}

		return env_var as T;
	}
}

