'use strict';

const Path = require('path');
const Hapi = require('hapi');
const Inert = require('Inert');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({ 
    host: 'localhost', 
    port: 8000 
});

//serving index
server.register(Inert, () => {});
server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: { //have to server the directory
            path: './src/client/',
            redirectToSlash: true,
            index: true
        }
    }
});

server.route({
    method: 'GET',
    path:'/hello', 
    handler: function (request, reply) {

        return reply('hello world');
    }
});

// Start the server
server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
