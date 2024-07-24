import React, { useState, useEffect } from "react";
import Restaurantcard from "./Restaurantcard";
import Shimmer from "./Shimmer";
import { v4 as uuidv4 } from 'uuid';

const Body = () => {
    const [reslist, setReslist] = useState([]);
    const [originalList, setOriginalList] = useState([]);
    const [showAll, setShowAll] = useState(true);
    const [search, setSearch] = useState("");

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4875418&lng=78.3953462&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        return json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    };

    useEffect(() => {
        const initializeData = async () => {
            const restaurants = await fetchData();
            setReslist(restaurants);
            setOriginalList(restaurants);
        };
        initializeData();
    }, []);

    const toggleRestaurant = () => {
        if (showAll) {
            setReslist(originalList.filter((res) => res.info.avgRating > 4));
        } else {
            setReslist(originalList);
        }
        setShowAll(!showAll);
    };

    const handleSearch = () => {
        const filtered = originalList.filter((res) =>
            res.info.name.toLowerCase().includes(search.toLowerCase())  ||res.info.cuisines.some(cuisine => cuisine.toLowerCase().includes(search.toLowerCase()))

        );
        setReslist(filtered);
    };

    return reslist.length === 0 ? (
        <Shimmer />
    ) : (
        <>
            <div className="filter">
                <div className="Search">
                    <input
                        type="text"
                        className="Search-text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>
                <button className="filter-btn" onClick={toggleRestaurant}>
                    {showAll ? 'Top-Restaurant' : 'Show All'}
                </button>
            </div>
            <div className="Res-container">
                {reslist.map((restaurant) => (
                    <Restaurantcard key={uuidv4()} resData={restaurant} />
                ))}
            </div>
        </>
    );
};

export default Body;
