// index.js or main file
import { createRoot } from 'react-dom/client';
import MainApp from './App.jsx';
import Signup from './Signup.jsx';
import Loginpage from './loginpage.jsx';
import { RouterProvider, Outlet, createBrowserRouter } from 'react-router-dom';
import './index.css';
import DetailsPage from './Details.jsx';

const Appcomponent = () => {
  return (
    <>
      <MainApp />
      <Outlet /> {/* This will render the child routes, such as Loginpage */}
    </>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Appcomponent />,
    children: [
      {
        path: "login", // Notice the path is "login" and not "/login"
        element: <Loginpage />
      },{
        path:"signup",
        element:<Signup/>
      },{
        path:"details",
        element:<DetailsPage/>
      }
    ]
  }
]);

const root = createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
