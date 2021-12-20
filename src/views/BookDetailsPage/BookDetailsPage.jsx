import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BookDetailsPage = () => {
  const { id } = useParams();
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

export default BookDetailsPage;
