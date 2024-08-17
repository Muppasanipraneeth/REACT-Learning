import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import MainPage from "./Components/Mainpage";
import Loginpage from './Components/Loginpage';
import Header from './Components/Header';
import CreateTodo from './Components/CreateTodo';
import './index.css';

// App component
const AppComponent = () => {
  return (
    <>
      <Header />
      <Outlet /> 
    </>
  );
};

// Router configuration
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppComponent />,
    children: [
      {
        path: 'signin',
        element: <Loginpage />
      },{
        path:'todo',
        element:<MainPage/>
      },{
        path:'addtask',
        element:<CreateTodo />

      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
