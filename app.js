/**
 * Server Entry
 */

// Dependencies
const { fastify } = require('fastify');
const { fastifyStatic } = require('fastify-static');
const path = require('path');
const appRoutes = require('./routers');
const { PORT } = require('./config');

// Initializing Application
const app = fastify();
app.register(fastifyStatic, { root: path.resolve(__dirname, 'client', 'build') });
app.get('/', (req, reply) => reply.sendFile('index.html'));
app.setNotFoundHandler((req, reply) => reply.sendFile('index.html'));

appRoutes.forEach((route) => app.route(route));

app.listen(PORT, (err, address) => {
    if (!err) return console.log(`Server running at ${address}`);
    console.error(err);
    process.exit(1);
});

