import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResMenu from "./components/RestaurantMenu";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
import Components from "./components/components";
import Topres from "./components/Toprest";

/* 
Header 
  - Navbar
   . logo
   . other 
   .swigy corparate
   .search
   .offer
   .help
   .sign in
body
 - restaurants cards
  .restauarant name
  .img 
  .cusiens
  .rating
  .time delevery
footer
 -contact details
 socail media accounts
 .copy rights

   


*/ 



const Appcontent=()=>{
    return (<>
        <Header />
        
        <Outlet />
        
        </>)
}

const appRouter=createBrowserRouter([
  {
    path :"/",
    element :<Appcontent />,
    children :[
      {
        path:"/",
        element :<Body />
      },
      {
      path:"/about",
      element:<About />
    },
    {
      path:"/contactus",
      element :<Contact/>
    },{
      path:"/Restaurant/:id",
      element :<ResMenu />
    }],
    errorElement :<Error />
  },
  
]);

const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider  router={appRouter}></RouterProvider>);


