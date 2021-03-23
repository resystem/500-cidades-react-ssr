/**
 *
 * extractNumbers - that function extract all numbers of an string
 *
 * @function extractNumbers
 * @param  {string} string  that function extract all numbers of an string
 * @returns {string} it's the string that have only the filtered numbers
 */
export const extractNumbers = (string) => string.replace(/[^\d]/g, '');