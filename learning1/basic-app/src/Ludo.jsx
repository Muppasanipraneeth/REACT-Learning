import { useState } from "react";

const Ludo=()=>{
    const [move,setMove]=useState({red:0,blue:0,green:0,yellow:0,})
    const handleblue=()=>{
        setMove((prevmove)=>{
return {...prevmove,blue :prevmove.blue+1}
        })
    }
    const handlegreen=()=>{
        setMove((Prevmove)=>{
            return {...Prevmove,green:Prevmove.green+1};
        })
    }
    const handlered=()=>{
        setMove((Prevmove)=>{
            return {...Prevmove,red:Prevmove.red+1};
        })
    }
    const handleyellow=()=>{
        setMove((Prevmove)=>{
            return {...Prevmove,yellow:Prevmove.yellow+1};
        })
    }
 

    return (<> 
    <div className="grid">
        <div className=" w-[200px] h-[90px] bg-red-600 border" onClick={handlered}>
            <h3>count {move.red}</h3>
            1+

        </div>
        <div className=" w-[200px] h-[90px] bg-green-800 border" onClick={handlegreen}>
        <h3>count {move.green}</h3>

            1+
        </div>
        <div className=" w-[200px] h-[90px] bg-blue-700 border" onClick={handleblue}>
        <h3>count {move.blue}</h3>

            1+
        </div>
        <div className=" w-[200px] h-[90px] bg-yellow-500 border" onClick={handleyellow}>
        <h3>count {move.yellow}</h3>

            1+
        </div>

    </div>
    
    </>)
}
export default Ludo;
/**
 * 
 * 
 *    const [red,setRed]=useState(0);
    const [green,setGreen]=useState(0);
    const [Yellow,setYellow]=useState(0);
    const [blue,setBlue]=useState(0);
const handleblue=()=>{
    setBlue(blue+1);
}
const handlegreen=()=>{
    setGreen(green+1);
}
const handleyellow=()=>{
    setYellow(Yellow+1);
}
const handlered=()=>{
    setRed(red+1); to avoid all this we use the objects in the state variable
 */