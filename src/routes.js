const {} = require('./handler');

const routes = [
	{
		method: 'POST',
		path: '/books',
		handler: (request, h) => {
			
		}
	},
	{
		method: 'GET',
		path: '/books',
		handler: (request, h) => {
			return 'Homepage'
		}
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