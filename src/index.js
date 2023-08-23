import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
import HeadCardSubmit from './Components/HeadCard/submited';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { CookiesProvider } from 'react-cookie';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/submitted",
    element: <HeadCardSubmit/>,
  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CookiesProvider>

    <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
    </ThemeProvider>
    </CookiesProvider>
  </React.StrictMode>
);

