import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import { getBooks } from '../../mock/general';

export const addBook = createAction('books/addBook');
export const removeBook = createAction('books/removeBook');

export const retrieveBooks = createAsyncThunk(
  'books/retrieveBooks',
  async () => {
    const response = await new Promise((resolve) => {
      setTimeout(() => resolve(getBooks()), 1000);
    });
    return response;
  },
);
