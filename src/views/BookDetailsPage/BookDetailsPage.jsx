import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import withRouter from '../../utils/hoc/withRouter';

const BookDetailsPage = ({ params: { id } }) => {
  const book = useSelector((state) => state.books.books.find((bookItem) => bookItem.id === id));

  return (
    <div className="book-details">
      {book ? (
        <>
          <h1>{book.title}</h1>
          <img src="https://picsum.photos/600/400" alt={book.title} />
          <h3>Description:</h3>
          <p>{book.description || '*No description for this book*'}</p>
        </>
      ) : (
        <h2>There is no such book :(</h2>
      )}
    </div>
  );
};

BookDetailsPage.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(BookDetailsPage);
