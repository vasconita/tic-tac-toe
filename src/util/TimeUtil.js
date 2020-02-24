/**
 * Wait time in milliseconds.
 *
 * @param delay {Number} Delay in milliseconds
 * @return {Promise<any>}
 */
export const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
