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

export { isValidName, isValidEmail };
