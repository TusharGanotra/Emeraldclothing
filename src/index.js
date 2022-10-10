import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import { UserProvider} from './context/user.context';
import { CategoriesProvider} from './context/categories.context';
import {CartProvider} from './context/cart.context';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <UserProvider>
  <CategoriesProvider>
  <CartProvider>
    <App />
    </CartProvider>
    </CategoriesProvider>
    </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
//CartProvider is nested inoside Product provider as cart will be only created when we add products or items to the cart
//Now we nested product provider inside user provider because in large applicationse products are filtered based on the users interest and geolocation of the user
//Anything which will be enclosed inside <userprovider>..<</userprovider> will be access all the data
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
