import {useState,useEffect} from "react";
export const useResMenu =(restaurantId)=>{
    const [menuCards, setMenuCards] = useState([]);
    const fetchData= async()=>{
        const jsons=await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4875418&lng=78.3953462&restaurantId=${restaurantId}`);
        const data=await jsons.json();
        setMenuCards(data?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
    }
    useEffect(()=>{
        fetchData();
    },[]);


    return menuCards;
}
export default useResMenu;