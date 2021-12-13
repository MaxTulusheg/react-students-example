import { createStore } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducer';

export default function configureStore() {
  if (process.env.NODE_ENV !== 'production') {
    return createStore(rootReducer, undefined, composeWithDevTools());
  }
  return createStore(rootReducer);
}
