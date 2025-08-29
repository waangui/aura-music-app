import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

// 1. Import the pages you want to create routes for.
import HomePage from './pages/HomePage.jsx';

const LibraryPage = () => <div className="p-8"><h1>Library</h1></div>;
const SearchPage = () => <div className="p-8"><h1>Search</h1></div>;

// 2. Define your routes.
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    
    children: [
      {
        path: "/", 
        element: <HomePage />, 
      },
      {
        path: "/library", 
        element: <LibraryPage />, 
      },
      {
        path: "/search", 
        element: <SearchPage />,
      },
    ],
  },
]);

// 3. Tell React to render your app with these routes.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
