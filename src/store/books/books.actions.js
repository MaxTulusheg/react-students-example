import * as types from './books.types';

/**
 * Add book to the store
 * @param {Object} book - Book object
 * @returns {{payload: Object, type: string}} - Action to add a book
 */
export const addBook = (book) => ({
  type: types.ADD_BOOK,
  payload: book,
});

/**
 * Remove book from the store by ID
 * @param {string} bookId - Book ID to be removed
 * @returns {{payload: string, type: string}} - Remove book action object
 */
export const removeBook = (bookId) => ({
  type: types.REMOVE_BOOK,
  payload: bookId,
});
