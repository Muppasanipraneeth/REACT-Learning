import { MdArrowDropDown } from "react-icons/md";
import { useState } from "react";
import Menucard from "./Menucard";

const Menulist=(props)=>{
    const [drop,setdrop]=useState(false);
    const {title,itemCards}=props.card.card;
    
    console.log(props);
    console.log(" this is called");
    const Drop=()=>{
        console.log("drop called");
        if(drop){
            setdrop(false);
        }else{
            setdrop(true)
        }
    }
    return(<>
    
    <div className="justify-center items-center border-5 shadow-sm ml-32 mr-20">
        <button className=" ml-32">
        <div className="font-bold flex  justify-between ">
            <span> {title} ({itemCards.length})</span>
    
            <span onClick={Drop} >
                <MdArrowDropDown className="inline" />
            </span>

        </div>
        {drop?<div>
            {itemCards.map((res,ind)=>(<Menucard  res={res.card.info}/>))}
        </div>:<div></div>}

        </button>

    </div>
    </>)
}
export  default Menulist;