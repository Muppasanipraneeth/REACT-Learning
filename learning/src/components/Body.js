import Restaurantcard from "./Restaurantcard";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

const Body = () => {
    const [reslist, setReslist] = useState([]);
    const [showAll, setShowAll] = useState(true);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4875418&lng=78.3953462&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json = await data.json();
            return json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        } catch (err) {
            setError(err);
            return [];
        }
    };

    useEffect(() => {
        const initializeData = async () => {
            const restaurants = await fetchData();
            setReslist(restaurants);
            setLoading(false);
        };
        initializeData();
    }, []);

    const toggleRestaurant = async () => {
        setLoading(true);
        const restaurants = await fetchData();
        if (showAll) {
            setReslist(restaurants.filter((res) => res.info.avgRating > 4));
        } else {
            setReslist(restaurants);
        }
        setShowAll(!showAll);
        setLoading(false);
    };

    if (loading) {
        return <h1>Loading ......</h1>;
    }

    if (error) {
        return <h1>There is an error: {error.message}</h1>;
    }

    return (
        <>
            <SearchBar />
            <div className="filter">
                <button className="filter-btn" onClick={toggleRestaurant}>
                    {showAll ? 'Top-Restaurant' : 'Show All'}
                </button>
            </div>
            <div className="Res-container">
                {reslist.map((restaurant, index) => (
                    <Restaurantcard key={uuidv4()} resData={restaurant} />
                ))}
            </div>
        </>
    );
};

export default Body;
