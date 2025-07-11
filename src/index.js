import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddReview from './components/AddReview';
import Courses from './components/Courses';
import CustomError from './components/CustomError';
import ErrorPage from "./components/error-page";
import LoginForm from './components/LoginForm';
import NavBar from './components/NavBar';
import Reviews from './components/Reviews';
import SignInForm from './components/SignInForm';
import './index.css';
import './style.css';

const router = createBrowserRouter([
  {
    path: "/",

    element: <><NavBar />
      <LoginForm /></>,
    errorElement: <ErrorPage />
  },
  {
    path: "/Login",
    element: <>
      <NavBar />
      <LoginForm />
    </>,
    errorElement: <ErrorPage />
  },
  {
    path: "/SignUp",

    element: <><NavBar /> <SignInForm /></>,
    errorElement: <ErrorPage />
  },
  {
    path: "/Error",
    element: <><NavBar /><CustomError /></>,
    errorElement: <ErrorPage />
  },
  {
    path: "/Courses",
    element: <><NavBar /><Courses /></>,
    errorElement: <ErrorPage />
  },
  {
    path: "/Reviews",
    element: <><NavBar /><Reviews /></>,
    errorElement: <ErrorPage />
  },
  {
    path: "/AddReview",
    element: <><NavBar /><AddReview /></>,
    errorElement: <ErrorPage />
  },
  {
    path: "/AddFeedBack",
    element: <><NavBar /><CustomError /></>,
    errorElement: <ErrorPage />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);