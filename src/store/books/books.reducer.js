import * as types from './books.types';

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case types.ADD_BOOK:
      return [
        ...state,
        action.payload,
      ];
    case types.REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default booksReducer;
