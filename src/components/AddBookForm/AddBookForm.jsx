import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';

import { addBook, retrieveBooks } from '../../store/books/books.actions';

const AddBookForm = () => {
  const dispatch = useDispatch();

  const isBookListLoading = useSelector((state) => state.books.isLoading);
  const bookListLength = useSelector((state) => state.books.books.length);

  const onSubmitForm = (event) => {
    event.preventDefault();

    const title = event.target.elements.title.value;
    const description = event.target.elements.description.value || '';

    if (title) {
      dispatch(addBook({
        title,
        description,
        id: uuid(),
      }));

      event.target.reset();
    }
  };
  const onLoadBooks = () => {
    dispatch(retrieveBooks());
  };

  return (
    <form onSubmit={onSubmitForm} className="book-form">
      <label htmlFor="book-title-field">
        <span>Title:</span>
        <input id="book-title-field" type="text" name="title" required />
      </label>
      <label htmlFor="book-description-field">
        <span>Description:</span>
        <input id="book-description-field" type="text" name="description" />
      </label>
      <input type="submit" value="Add a book" />
      <input
        type="button"
        disabled={bookListLength || isBookListLoading}
        onClick={onLoadBooks}
        value={isBookListLoading ? 'Loading...' : 'Load book list'}
        style={{ margin: '10px 0 0' }}
      />
    </form>
  );
};

export default AddBookForm;
