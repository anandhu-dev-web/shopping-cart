import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartContextProvider } from './context/CartContext';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <Provider store={store}>
        <App />
     </Provider>
    </CartContextProvider>
  </React.StrictMode>
);

