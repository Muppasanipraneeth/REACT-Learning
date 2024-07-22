import { Res_url } from "../utils/logo";
const Restaurantcard=(props)=>{
    const {resData}=props;
    console.log();
    return (<>
    
<div className="Res-container">
  
<div className ="Res-cards">
        <div >
    
        <img className ="Res-img"src={Res_url+resData.info.cloudinaryImageId}  ></img>
        </div>
        <div className=" Res-items">
            <h4> {resData.name}</h4>
            <h4> rating is {resData.info.avgRating} </h4>
            <h4> time delevery {resData.info.deliveryTime} </h4>
            <h4> amount  for two {resData.info.costForTwoString}</h4>
            <h4> cusiens {resData.info.cuisines.join(",")}</h4>
        </div>
    </div>
</div>

    </>);
}
export default Restaurantcard;