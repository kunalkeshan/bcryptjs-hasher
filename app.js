/**
 * Server Entry
 */

// Dependencies
const { fastify } = require('fastify');
const { fastifyStatic } = require('fastify-static');
const path = require('path');
const {PORT} = require('./config');

// Initializing Application
const app = fastify();
app.get('/*/', (req, reply) => reply.sendFile('index.html'));
app.register(fastifyStatic, { root: path.resolve(__dirname, 'client', 'build') });

app.listen(PORT, (err, address) => {
    if (!err) return console.log(`Server running at ${address}`);
    console.error(err);
    process.exit(1);
});

