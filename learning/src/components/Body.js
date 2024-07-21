import Restaurantcard from "./Restuarantcard";
import Searchbar from "./searchbar";
import { resList } from "../utils/constants";
const Body = () => {
    return (
        <>
            <Searchbar />
            <div className="Res-container">
                {resList.map((restaurant) => (
                    <Restaurantcard key={restaurant.id} resData={restaurant} />
                ))}
            </div>
        </>
    );
};
export default Body;