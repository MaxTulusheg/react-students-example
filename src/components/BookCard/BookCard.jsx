import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { removeBook } from '../../store/books/books.actions';

const BookCard = ({ title, description, id }) => {
  const dispatch = useDispatch();

  const onRemoveBook = () => {
    dispatch(removeBook(id));
  };

  return (
    <div className="book-card">
      <img src="https://picsum.photos/200" alt="book pic" />
      <h3 title={title}>{title}</h3>
      {description ? (
        <p>{description}</p>
      ) : (
        <p>*No description*</p>
      )}
      <button type="button" onClick={onRemoveBook}>Remove</button>
    </div>
  );
};

BookCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

BookCard.defaultProps = {
  description: '',
};

export default BookCard;
