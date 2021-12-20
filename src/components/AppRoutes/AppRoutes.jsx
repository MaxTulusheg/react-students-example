import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '../../views/HomePage/HomePage';
import Navigation from '../Navigation/Navigation';
import FormPage from '../../views/FormPage/FormPage';
import BookListPage from '../../views/BookListPage/BookListPage';
import BookDetailsPage from '../../views/BookDetailsPage/BookDetailsPage';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Navigation />}>
      <Route exact path="/" element={<HomePage />} />
      <Route path="form" element={<FormPage />} />
      <Route path="books">
        <Route exact path="/books" element={<BookListPage />} />
        <Route path=":id" element={<BookDetailsPage />} />
      </Route>
    </Route>
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default AppRoutes;
