import { configureStore, isAsyncThunkAction } from '@reduxjs/toolkit';

import booksReducer from './books/books.slice';
import userReducer from './user/user.slice';

// eslint-disable-next-line no-unused-vars
const customMiddleWare = (store) => (next) => (action) => {
  if (isAsyncThunkAction(action) && process.env.NODE_ENV !== 'production') {
    console.log('Async action triggered:', action);
  }
  next(action);
};

export default configureStore({
  reducer: {
    books: booksReducer,
    user: userReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(customMiddleWare),
});
