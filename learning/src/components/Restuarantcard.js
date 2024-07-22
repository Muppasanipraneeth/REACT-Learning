import { Res_url } from "../utils/logo";
const Restaurantcard=(props)=>{
    const {resData}=props;
    console.log();
    return (<>
    
<div className="Res-container">
  
<div className ="Res-cards">
        <div >
    
        <img className ="Res-img"src={Res_url+resData.data.cloudinaryImageId}  ></img>
        </div>
        <div className=" Res-items">
            <h4> {resData.name}</h4>
            <h4> rating is {resData.data.avgRating} </h4>
            <h4> time delevery {resData.data.deliveryTime} </h4>
            <h4> amount  for two {resData.data.costForTwoString}</h4>
            <h4> cusiens {resData.data.cuisines.join(",")}</h4>
        </div>
    </div>
</div>

    </>);
}
export default Restaurantcard;