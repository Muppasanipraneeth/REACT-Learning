import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import {useState,useEffect} from "react";
import Cards from "../utils/Cards";
const Topres=()=>{
    const [list,setlist]=useState([]);
    const [slide,setSlide]=useState(0);
    const fetchData=async()=>{
        const res=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4875418&lng=78.3953462&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const data= await res.json();
        const list1=data.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setlist(list1.filter((res)=>res.info.avgRating));
     
        // setlist(list);
    }
    console.log(list);
  
    useEffect(() => {
    
        fetchData();
    }, []);
    const left=()=>{
        if(slide<=0){
            return ;
        }
        else{
            setSlide(slide-3);
        }
console.log("left");
    }
    const right =()=>{
        if(slide>=list.length-7){
            return ;
        }else{
            setSlide(slide+3);
        }
        console.log("right");
    }
    return (<>
<div className=" ml-28 flex justify-between">
    <div className="font-extrabold ">
        <h3> Top Restaurant in hyderbad</h3>
    </div>
    <div className="flex mr-32">
                    <div
                        onClick={left}
                        className="flex items-center justify-center w-[35px] h-[35px] bg-[#02060c26] rounded-full m-1 cursor-pointer"
                    >
                        <FaArrowLeft />
                    </div>
                    <div
                        onClick={right}
                        className="flex items-center justify-center w-[35px] h-[35px] bg-[#02060c26] rounded-full m-1 cursor-pointer"
                    >
                        <FaArrowRight />
                    </div>
                </div>
    
</div>   
<div className="flex  ml-32 overflow-hidden" >
    {list.map((res,ind)=>{
        return (<>
        <div key ={ind}
         style={{
            transform: `translateX(-${slide * 100}%)`,
        }}
        className="">
        <Cards  key={ind}  res={res}/>
        </div>
        </>)
    })}
</div>




    </>)
}
export default Topres;