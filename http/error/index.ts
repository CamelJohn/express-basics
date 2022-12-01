import { HttpErrorCode, HttpErrorMessage } from "./types";

export class BaseErrorClass extends Error {
	constructor(message: string, public code: number) {
		super(message);
	}
}

export class BadRequest extends BaseErrorClass {
	constructor() {
		super(HttpErrorMessage.BadRequest, HttpErrorCode.BadRequest);
	}
}

export class Unauthorized extends BaseErrorClass {
	constructor() {
		super(HttpErrorMessage.Unauthorized ,HttpErrorCode.Unauthorized);
	}
}

export class Forbidden extends BaseErrorClass {
	constructor() {
		super(HttpErrorMessage.Forbidden, HttpErrorCode.Forbidden);
	}
}

export class NotFound extends BaseErrorClass {
	constructor() {
		super(HttpErrorMessage.NotFound, HttpErrorCode.NotFound);
	}
}

export class Conflict extends BaseErrorClass {
	constructor() {
		super(HttpErrorMessage.Conflict, HttpErrorCode.Conflict);
	}
}

export class Unprocessable extends BaseErrorClass {
	constructor() {
		super(HttpErrorMessage.Unprocessable, HttpErrorCode.Unprocessable);
	}
}