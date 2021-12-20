import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import AppRoutes from './components/AppRoutes/AppRoutes';

import store from './store/store';

import './App.css';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </Provider>
);

export default App;
