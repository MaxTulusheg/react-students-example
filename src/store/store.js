import { configureStore } from '@reduxjs/toolkit';

import booksReducer from './books/books.slice';
import userReducer from './user/user.slice';

export default configureStore({
  reducer: {
    books: booksReducer,
    user: userReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
