const Hapi = require('@hapi/hapi');

const init = async () => {
	const server = Hapi.server({
		port: 6000,
		host: 'localhost',
		routes: {
			cors: {
				origin: ['*'],
			},
		},
	})
	
	
	await server.start();
	console.log(`Server running at ${server.info.uri}`);
}

init();