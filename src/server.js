const Hapi=require('@hapi/hapi');
const routes=require('../src/routes/movieURLs');

const createServer=async()=>{
	const server=await Hapi.server({
		host:'localhost',
		port:8080
	});
	await server.route(routes);
	return server;
};

module.exports=createServer;