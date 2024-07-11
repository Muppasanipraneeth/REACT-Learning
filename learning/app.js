import React from "react";
import ReactDOM from "react-dom/client";

const Reastuarantcard = (props) => {
    return (
        <div className="res-card">
            <div className="res-img">
                <img src={props.resImg} alt="img" className="rest-img" />
            </div>
            <div>
                <h3>{props.restname}</h3>
                <h4>{props.cusines}</h4>
                <h4>{props.resRating}</h4>
                <h5>{props.resTime}</h5>
            </div>
        </div>
    );
};

const Heading = () => {
    return (
        <div className="header">
            <div className="logo">
                <img className="imglogo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnIcDuYI31wkF-ErJddcA2FOgqUvpCGCJgnA&s" alt="logo" />
            </div>
            <div className="navbar">
                <ul className="nav-items">
                    <li>Home</li>
                    <li>About</li>
                    <li>Offers %</li>
                    <li>Cart</li>
                    <li>Login</li>
                </ul>
            </div>
        </div>
    );
};

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="restaurant-card">
                <Reastuarantcard restname="Raja Cosma Restaurant" cusines="biryani, South Indian food, fast food, Bhanugundi" resRating="4.5" resTime="20-35 mins" resImg="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/5/4/dfc7fe4a-9635-4590-95ea-570731f71073_b44afbf1-e229-40cb-ae6e-0999cf6eecd4.jpg" />
                <Reastuarantcard restname="Messala Raju Vari Military Biryani" cusines="All chicken curry, North Indian food" resRating="3.5" resTime="15-25 mins" resImg="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/4/4/2e721f0b-f1ca-4be3-8d96-4ac78e51a7ae_e41acdb8-b07e-4c32-bd7b-aef60683ef0f.jpg_compressed" />
                <Reastuarantcard restname="Sri NVR Food Court" cusines="Biryani, South Indian, Bhanugundi" resRating="3.9" resTime="15-20 mins" resImg="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/j1hxzsm4empc7voh7qtl" />
                <Reastuarantcard restname="KFC" cusines="burger, Coca-Cola, Pepsi, fast-food" resRating="5.5" resTime="30-40 mins" resImg="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/057b9d2dac34894ac9463803907d790d" />
                <Reastuarantcard restname="Food Park Restaurant" cusines="Biryani, South Indian, Bhanugundi" resRating="5.5" resTime="20-25 mins" resImg="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/lb6civnifza61uudh9ra" />
                <Reastuarantcard restname="Rajula Dhoni Biryani" cusines="Rotis, Coca-Cola, Pepsi, fast-food" resRating="5.5" resTime="10 mins" resImg="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/k3sqrdfkltkuxtsgytei" />
                <Reastuarantcard restname="Abhiruchi" cusines="All chicken curry, North Indian food" resRating="5.5" resTime="5 mins" resImg="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/uqypj9dbadie0nxwzlhi" />
                <Reastuarantcard restname="RR Dharbar" cusines="Biryani, South Indian food, fast food, Bhanugundi" resRating="5.5" resTime="20-35 mins" resImg="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/4e35f6912b8aaa3f8bf4059ad19baecf" />
                <Reastuarantcard restname="Sathya Paradise" cusines="burger, Coca-Cola, Pepsi, fast-food" resRating="5.5" resTime="35 mins" resImg="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/4c944ddbac1f7bbfd4c29b6ffe73128c" />
                <Reastuarantcard restname="Nizam's Biryani" cusines="All chicken curry, North Indian food" resRating="5.5" resTime="1 hr" resImg="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/3/27/4fcd65c6-0248-4202-9be8-95d7ff1baa6a_70e37e20-9d17-458d-8aab-13acff93cdf1.jpg_compressed" />
                <Reastuarantcard restname="Rainbow Restaurant" cusines="Biryani, South Indian food, fast food, Bhanugundi" resRating="5.5" resTime="10-23 mins" resImg="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/dffecb8b47ffd42ca66ee95992704871" />
                <Reastuarantcard restname="Kfoods" cusines="burger, Coca-Cola, Pepsi, fast-food" resRating="5.5" resTime="17 mins" resImg="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/x7se256oxtdmvpt76ltj" />
                <Reastuarantcard restname="Red Bucket" cusines="Biryani, South Indian food, fast food, Bhanugundi" resRating="5.5" resTime="23 mins" resImg="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/vkj5eamd8g7y0wqwh3sd" />
                <Reastuarantcard restname="Spicy Dhaba" cusines="burger, Coca-Cola, Pepsi, fast-food" resRating="5.5" resTime="5 mins" resImg="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bssfic1tlixl8ferrgiw" />
                <Reastuarantcard restname="Amma Food" cusines="Biryani, South Indian food, fast food, Bhanugundi" resRating="5.5" resTime="20 mins" resImg="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/garh5qaqdti3t7koz4hn" />
            </div>
        </div>
    );
};

const Mainpage = () => {
    return (
        <>
            <Heading />
            <Body />
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Mainpage />);
