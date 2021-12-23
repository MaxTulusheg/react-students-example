import React, { useMemo, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import AppRoutes from './components/AppRoutes/AppRoutes';
import { GeneralContext, generalInfo } from './utils/context/GeneralContext.context';

import store from './store/store';

import './App.css';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ isBlue }) => (isBlue ? '#2d8dfb' : 'red')};
  }
`;

const App = () => {
  const [generalContextValue, setContextValue] = useState(generalInfo);
  // using "useMemo" to avoid not needed re-renders
  const providedValue = useMemo(() => ({
    ...generalContextValue,
    changeData: setContextValue,
  }), [generalContextValue]);

  return (
    <>
      <GlobalStyle isBlue={providedValue.isBlue} />
      <Provider store={store}>
        <BrowserRouter>
          <GeneralContext.Provider value={providedValue}>
            <AppRoutes />
          </GeneralContext.Provider>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
