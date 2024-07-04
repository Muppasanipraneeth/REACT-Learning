import React from "react";
import ReactDOM from "react-dom";

/**
 * =>header
 *     .logo 
 *     .side bar
 * =>main content
 *   .reastuarant 
 *   .reastuarant carditems
 * footer
 * 
*/
const Heading=()=>{
    return (
        <div className="header">
        <div className="logo">
        <img className="imglogo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAKldHQWSohmyiPt-G1NnCK0lyI7dAOnfYTQ&s" />
        </div>
        <div className="navbar">
                <ul className="nav-items">
                    <li>Home</li>
                    <li> about</li>
                    <li> offers %</li>
                    <li> cart</li>
                    <li> login</li>
                </ul>
            </div>
        </div>
    );

}
const Mainpage=()=>{
    return (<Heading></Heading>);
}
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<Mainpage />);