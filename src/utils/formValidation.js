//========== Form Validation Utils ==========

/**
 * Validates that the name contains only letters.
 * @param {string} name
 * @returns {boolean}
 */
const isValidName = (name) => {
    return /^[A-Za-z\s]+$/.test(name);
};

/**
 * Validates that the email is in a correct format.
 * @param {string} email
 * @returns {boolean}
 */
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

/**
 * Validates that the message is not empty.
 * @param {string} message
 * @returns {boolean}
 */
const isValidMessage = (message) => {
    return message.trim().length > 0;
};

export { isValidName, isValidEmail, isValidMessage };
