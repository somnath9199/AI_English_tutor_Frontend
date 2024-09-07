import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPages from './pages/LandingPages';
import Login from './pages/Login';
import Register from './pages/Register';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Dashboard from './pages/Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPages />,
  },
  {
    path:'/Login',
    element: <Login/>
  },
  {
    path:'/Register',
    element:<Register/>
  },
  {
    path:'/Dashboard',
    element:<Dashboard/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId='655807469743-ksgdnpk6vq1ik9d7rv3f2n327kp6pggh.apps.googleusercontent.com'>
    <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
