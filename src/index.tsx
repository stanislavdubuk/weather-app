import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { getLocalStorage } from './lib/localStorage';
import { store } from './store';
import App from './App';

import './index.scss';

getLocalStorage();

store.subscribe(() => {
  localStorage.setItem('cities', JSON.stringify(store.getState().cities));
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
