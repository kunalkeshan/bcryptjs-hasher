/**
 * Application Configuration Schema
 */

// Dependencies
require('dotenv').config()

const isProduction = process.env.NODE_ENV === 'production';

// Configuration container
const configuration = {
    PORT: parseInt(process.env.PORT, 10) || 5050,
    isProduction,
};

module.exports = configuration;