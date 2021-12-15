/* eslint-disable */
import React from 'react';
import { Navigate, Route, Routes, useRoutes } from 'react-router-dom';
import HomePage from '../../views/HomePage/HomePage';
import Navigation from '../Navigation/Navigation';
import FormPage from '../../views/FormPage/FormPage';
import BookListPage from '../../views/BookListPage/BookListPage';
import BookDetailsPage from '../../views/BookDetailsPage/BookDetailsPage';

const AppRoutes = () => {
  const router = useRoutes([{
    path: '/',
    element: <Navigation />,
    children: [{
      path: '/',
      exact: true,
      element: <HomePage />,
      children: [],
    }, {
      path: 'form',
      element: <FormPage />,
      children: [],
    }, {
      path: 'books',
      children: [{
        path: '/books',
        exact: true,
        element: <BookListPage />,
        children: [],
      }, {
        path: ':id',
        element: <BookDetailsPage />,
        children: [],
      }],
    }],
  }]);

  // return router;

  // console.log(router);

  return (
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
};

export default AppRoutes;
