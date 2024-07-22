import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body";

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
        <Body></Body>
        
        </>)
}



const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<Appcontent/>);


