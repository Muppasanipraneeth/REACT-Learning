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
            <h4> Restaurant :{resData.info.name}</h4>
            <h4> Rating:{resData.info.avgRating} </h4>
            <h4> Time delevery:{resData.info.sla.deliveryTime}mins</h4>
            <h4> Amount for two:{resData.info.costForTwo}</h4>
            <p> cusiens:{resData.info.cuisines.join(",")}</p>
        </div>
    </div>
</div>

    </>);
}
export default Restaurantcard;