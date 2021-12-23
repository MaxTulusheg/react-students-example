import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import cx from 'classnames';

import { removeBook } from '../../store/books/books.actions';

const BookCard = ({ title, description, id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onRemoveBook = () => {
    dispatch(removeBook(id));
  };

  return (
    <div className={cx('book-card', { special: Math.random() > 0.5 })}>
      <img src="https://picsum.photos/200" alt="book pic" />
      <h3 className={cx('nav-title')} title={title} onClick={() => navigate(`/books/${id}`)}>{title}</h3>
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
