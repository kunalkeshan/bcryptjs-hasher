/**
 * Application controllers
 */

// Dependencies
const bcrypt = require('bcryptjs');

// Application controller container
const appController = {};

appController.hash = (req, reply) => {
    const { string, salt = '', rounds = 10 } = req.body;
    const SALT = salt || bcrypt.genSaltSync(rounds);
    const hashed = bcrypt.hashSync(string, SALT);
    reply.send({ hashed, string, salt, rounds });
}

appController.compare = (req, reply) => {
    const { hashed, string } = req.body;
    const matched = bcrypt.compareSync(string, hashed);
    reply.send({hashed, string, matched});
}

// Exporting app controller
module.exports = appController;