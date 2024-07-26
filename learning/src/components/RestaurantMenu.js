import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MenuItem = ({ name ,description,rating}) => {
    return (
        <div className="menu-items">
            <h1>Name: <bold>{name}</bold></h1>
            <p> {rating}
                <br></br>
                {description} </p>

        </div>
    );
};

const ResMenu = () => {
    const { id } = useParams();
    const [menu, setMenu] = useState(null);
    const [menuCards, setMenuCards] = useState([]);

    const fetchRestaurantMenu = async (restaurantId) => {
        try {
            const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4875418&lng=78.3953462&restaurantId=${restaurantId}`);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            console.log("Fetched data:", data);
            const restaurantInfo = data?.data?.cards?.[2]?.card?.card?.info;
            const menuCardData = data?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
            console.log("Menu Cards:", menuCardData);
            
            if (menuCardData) {
                setMenuCards(menuCardData);
            } else {
                console.log("The Menu of the pages is not found");
            }
            
            if (restaurantInfo) {
                setMenu(restaurantInfo);
                console.log("Restaurant Info:", restaurantInfo);
            } else {
                console.error("Restaurant info not found in the response.");
            }
        } catch (error) {
            console.error("Error fetching restaurant menu:", error);
        }
    };

    useEffect(() => {
        if (id) {
            fetchRestaurantMenu(id);
        }
    }, [id]);

    const renderRestaurantInfo = (info) => (
        <div>
            <h2>{info.name}</h2>
            <p>{info.locality}, {info.areaName}</p>
            <p>{info.costForTwoMessage}</p>
            <p>Rating: {info.avgRating} ({info.totalRatingsString})</p>
            <p>Delivery Time: {info.sla.slaString}</p>
            <p>Discount: {info.aggregatedDiscountInfo?.header}</p>
        </div>
    );

    return (
        <div>
            <h1>Restaurant Menu</h1>
            {menu ? (
                <>
                    {renderRestaurantInfo(menu)}
                    {menuCards.map((item, index) => (
                        <MenuItem key={index} name={item.card.info.name} description={item.card.info.description}  rating={item.card.info.ratings.aggregatedRating.rating}/>
                    ))}
                </>
            ) : (
                <p>Loading menu...</p>
            )}
        </div>
    );
};

export default ResMenu;
