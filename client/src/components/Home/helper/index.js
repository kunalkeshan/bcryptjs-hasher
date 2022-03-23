/**
 * Hash and Compare Helper
 */

// Dependencies
import backend from "../../../utils/backend";

/**
 * 
 * @param {object} data Contains {string, salt, rounds} 
 * @returns {string} hashed string
 */
export const hashString = async (data) => {
    try {
        const hashedData = await backend({ url: '/api/hash', method: 'post', data });
        return hashedData;
    } catch (error) {
        return Promise.reject(error);
    }
};

/**
 * 
 * @param {object} data Contains {string, hashed} 
 * @returns {boolean} if strings match true else false
 */
export const compareString = async (data) => {
    try {
        const matchedData = await backend({ url: '/api/compare', method: 'post', data });
        return matchedData;
    } catch (error) {
        return Promise.reject(error);
    }
};