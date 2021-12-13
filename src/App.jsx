import React from 'react';
import { Provider } from 'react-redux';

import HomePage from './views/HomePage/HomePage';

import configureStore from './store/configureStore';

import './App.css';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <HomePage />
  </Provider>
);

export default App;
