import React from 'react';
import { useSelector } from 'react-redux';

import BookCard from '../BookCard/BookCard';

const BookList = () => {
  const bookList = useSelector((state) => state.books.books);

  return (
    <div className="book-list">
      {bookList.map((book) => (
        <BookCard {...book} key={book.id} />
      ))}
    </div>
  );
};

export default BookList;
