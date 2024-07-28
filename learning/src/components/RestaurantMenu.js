import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {useResInfo} from "../utils/useResInfo"
import useResMenu from "../utils/useResMenu";
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
    const menu=useResInfo(id);
    const menuCards=useResMenu(id);
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
