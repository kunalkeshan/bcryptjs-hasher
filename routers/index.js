/**
 * Application Routes
 */

// Dependencies
const appController = require('../controllers');
const appSchema = require('../schema');

// Application Routes Array
const appRoutes = [
    {
        method: 'POST',
        url: '/api/hash',
        schema: appSchema.hashValidation,
        handler: appController.hash,
    },
    {
        method: 'POST', 
        url: '/api/compare',
        schema: appSchema.compareValidation,
        handler: appController.compare,
    }
];

// Exporting app routes
module.exports = appRoutes;