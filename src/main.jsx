import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout';
import Home from "./pages/home";
import Explore from './components/explore';
import Notifications from './components/notifications';
import Messages from './components/messages';
import Bookmarks from './components/bookmarks';
import Lists from './components/liste';
import Profile from './components/profile';
import More from './components/more';
import UserProfile from './pages/user-profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/explore",
        element: <Explore />,
      },
      {
        path: "/notifications",
        element: <Notifications />,
      },
      {
        path: "/messages",
        element: <Messages />,
      },
      {
        path: "/bookmarks",
        element: <Bookmarks />,
      },
      {
        path: "/lists",
        element: <Lists />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/more",
        element: <More />,
      },
      {
        path: ":tweetTitle",
        element: <UserProfile />,
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);