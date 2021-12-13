import { combineReducers } from 'redux';

import booksReducer from './books/books.reducer';
import userReducer from './user/user.reducer';

export default combineReducers({
  books: booksReducer,
  user: userReducer,
});
