import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { StoreContext, store } from './models/StoreContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  </React.StrictMode>
);
