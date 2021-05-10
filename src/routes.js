const { addBookHandler, getAllBooksHandler } = require('./handler');

const routes = [
	{
		method: 'POST',
		path: '/books',
		handler: addBookHandler,
		options: {
			cors: {
				origin: ['*'],
			},
		},
	},
	{
		method: 'GET',
		path: '/books',
		handler: getAllBooksHandler
	},
	{
		method: 'GET',
		path: '/books/{bookId}',
		handler: (request, h) => {}
	},
	{
		method: 'PUT',
		path: '/books/{bookId}',
		handler: (request, h) => {}
	},
	{
		method: 'DELETE',
		path: '/books/{bookId}',
		handler: (request, h) => {}
	}
]

module.exports = routes;