export enum HttpErrorMessage {
	BadRequest = 'Bad Request',
	Unauthorized = 'Unauthorized',
	Forbidden = 'Forbiddedn',
	NotFound = 'Not Found',
	Conflict = 'Conflict',
	Unprocessable = 'Unprocessable'
}

export enum HttpErrorCode {
	BadRequest = 400,
	Unauthorized = 401,
	Forbidden = 402,
	NotFound = 404,
	Conflict = 409,
	Unprocessable = 422
}