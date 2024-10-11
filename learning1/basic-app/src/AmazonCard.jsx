import PropTypes from "prop-types"
const Card=(props)=>{
    const handleClick=()=>{
        alert("you have clicked the button ");
        console.log(" the button was cliked");
        
    }
    const {name,img,details}=props;
    return (<>
    <div className="border m-2">
        <img  src={img} ></img>
        <h2>{name}</h2>
        <p className="border-l">
            {details}
        </p>
        <button onClick={handleClick}> click me</button>
    </div>
    

    </>)
}
Card.propTypes={
    img:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    details:PropTypes.string.isRequired
}
export default Card;