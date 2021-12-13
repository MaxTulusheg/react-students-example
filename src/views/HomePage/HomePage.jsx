import React from 'react';

import AddBookForm from '../../components/AddBookForm/AddBookForm';
import BookList from '../../components/BookList/BookList';

const HomePage = () => (
  <div>
    <h1>Library</h1>
    <AddBookForm />
    <BookList />
  </div>
);

export default HomePage;
