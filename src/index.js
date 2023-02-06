import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './style/style.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Add from './pages/Add';
import Layout from './pages/Layout';
import ErrorRoute from './pages/ErrorRoute';
import Product from './pages/Product';
import Edit from './pages/Edit';




const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout/>,
      errorElement: <ErrorRoute />,
      children: [
        { index:true,  element: <Home /> },
        { path: 'home', element: <Home /> },
        { path: 'add', element: <Add /> },
        { path: 'product/edit/:id', element: <Edit/> },
        { path: 'product', element: <Product/> },
        { path: 'register', element: <Register /> },
        { path: 'login', element: <Login /> },
      ]
    }
  ]
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
