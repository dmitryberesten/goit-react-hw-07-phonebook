import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // для того, щоб передати store всім компонентам, які будуть використовувати дані зі store
import { store } from './redux/store';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    {/* Provider - компонент, який передає store всім компонентам, які будуть використовувати дані зі store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// Діма Берестень
