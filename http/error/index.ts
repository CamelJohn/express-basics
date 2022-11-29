export class BaseErrorClass extends Error {
	constructor(message: string, public code: number) {
		super(message);
	}
}

export class BadRequest extends BaseErrorClass {
	constructor(message = 'Bad Request', code = 400) {
		super(message, code);
	}
}

export class Unauthorized extends BaseErrorClass {
	constructor(message = 'Unauthorized', code = 401) {
		super(message, code);
	}
}

export class Forbidden extends BaseErrorClass {
	constructor(message = 'Forbidden', code = 403) {
		super(message, code);
	}
}

export class NotFound extends BaseErrorClass {
	constructor(message = 'Not Found', code = 404) {
		super(message, code);
	}
}

export class Conflict extends BaseErrorClass {
	constructor(message = 'Conflict', code = 409) {
		super(message, code);
	}
}

export class Unprocessable extends BaseErrorClass {
	constructor(message = 'Unprocessable', code = 422) {
		super(message, code);
	}
}