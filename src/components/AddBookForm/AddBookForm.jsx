import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';

import { addBook } from '../../store/books/books.actions';

const AddBookForm = ({ addBook: createBook }) => {
  const onSubmitForm = (event) => {
    event.preventDefault();

    const title = event.target.elements.title.value;
    const description = event.target.elements.description.value || '';

    if (title) {
      createBook({
        title,
        description,
        id: uuid(),
      });

      event.target.reset();
    }
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
    </form>
  );
};

AddBookForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addBook,
}, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(AddBookForm);
