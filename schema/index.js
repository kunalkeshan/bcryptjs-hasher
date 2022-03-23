/**
 * Application Schema
 */

// App Schema container
const appSchema = {};

appSchema.hashValidation = {
    body: {
        type: 'object',
        required: ['string'],
        properties: {
            string: { type: 'string' },
            salt: { type: 'string' },
            rounds: { type: 'number' }
        }
    },
    response: {
        200: {
            type: 'object',
            required: ['hashed'],
            properties: {
                string: { type: 'string' },
                salt: { type: 'string' },
                rounds: { type: 'number' },
                hashed: { type: 'string' },
            }
        }
    }
};

appSchema.compareValidation = {
    body: {
        type: 'object',
        required: ['string', 'hashed'],
        properties: {
            string: { type: 'string' },
            hashed: { type: 'string' },
        }
    },
    response: {
        200: {
            type: 'object',
            required: ['matched'],
            properties: {
                string: { type: 'string' },
                matched: { type: 'boolean' },
                hashed: { type: 'string' },
            }
        }
    }
}

// Exporting app Schema
module.exports = appSchema;