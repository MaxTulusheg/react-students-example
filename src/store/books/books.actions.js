import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import { getBooks } from '../../mock/general';
import { sleep } from '../../utils/helpers/async.helpers';

export const addBook = createAction('books/addBook');
export const removeBook = createAction('books/removeBook');

export const retrieveBooks = createAsyncThunk(
  'books/retrieveBooks',
  async () => {
    await sleep(2000);

    return getBooks();
  },
);
