import Restaurantcard from "./Restuarantcard";
import Searchbar from "./searchbar";
import { resList } from "../utils/constants";
import {useState} from "react";
const Body = () => {
let [reslist,setreslist]=useState(resList);
let [showall, setshowall]=useState(true);
const toggleRestaurant=()=>{
    if(showall){
        setreslist(resList.filter((res)=>res.data.avgRating>4))
    }else{
        setreslist(resList);

    }
    setshowall(!showall);
}
    return (
        <>
            <Searchbar />
            <div className="filter">
                <button className="filter-btn" onClick={toggleRestaurant}>
                    {showall ? 'Top-Restaurant':'showAll'}
                </button>
                
            </div>

            <div className="Res-container">
                {reslist.map((restaurant) => (
                    <Restaurantcard key={restaurant.id} resData={restaurant} />
                ))}
            </div>
            
        </>
    );
};
export default Body;