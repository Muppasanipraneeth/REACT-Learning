import { FcLike } from "react-icons/fc";
// import { FcDislike } from "react-icons/fc";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";

const Like =()=>{
    const [like ,setlike]=useState(false);
    const handleLike=()=>{
        setlike(!like);
    }
    return (<>
    <div onClick={handleLike}>
    {like ? <FaRegHeart/> :<FcLike />}
    </div>
    </>)
}
export  default Like;