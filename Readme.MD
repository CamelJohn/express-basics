# Lesson 1 - Basic express server, and Http basics

### Http Verbs

- GET - get data from the server.
- POST - send data to the server.
- PUT - replace target resource on the server.
- PATCH - partially update target resource on ther server.
- DELETE - delete target resource on ther server.
- OPTIONS - describes the communication options for target resource on the server.

### Http status code groups

- 1xx - information
- 2xx - success
- 3xx redirection
- 4xx client error
- 5xx server errors

### Common http status codes
- 200 - OK
- 201 - created
- 304 - not modified
- 309 - redirect
- 400 - bad request
- 401 - unauthorized
- 403 - forbidden
- 404 - not found
- 409 - conflict
- 418 - I’m a teapot ! (engineers have a sense of humor too)
- 422 - unprocessable entity
- 500 - internal server error
- 502 -  bad gateway
- 503 - service unavailable

### Http Request Construct

- Line 1 : HTTP Verb 'protocol host:port/forward_slash_deleimited_path http_version_optional
- Line 2 : optionalliy send headers
- Line 3 : request body - where applicable

### Example http requests

GET http://localhost:3000/api/v1/users?email=liar@gmail.com HTTP/1.1

POST http://localhost:3000/api/v1/users HTTP/1.1
Content-Type: application/json
Authorization: Bearer token_here

{
	"user": {
		"email": "liar@gmail.com",
		"password": "lies"
	}
}

### Basic express server

will have an instance of express - that his the underlying app representation.

you can configure a port for the web-server to listen on.
you can optionally configure the protocol and host as well (we will not do this).

you can use middleware to help you handle url parameters and queries, as well as json bodies from incoming requests.

you can use a router to route and handle your requests.

you must listen to a port for the webserver to work.

### Middlware functions
functions that has:
1. access to the request (express's representation of the http request)
2. access to the response object (express's representation of the http response)
3. has a next function

middlware functions can:
* execute any code
* make changes to the request/response objects.
* end the request/response cycle.
* call the net middleware in the stack.

### More on the next function
a function within the Express router, when invoked, executes the next middleware.

### Routes 
in express routes are attached to the main express app. but can also be created as seperate routers.
you can use all the basic http methods.

`app.get('/', middleware)`

you would have a leading url, then an express RequestHandler middleware.

