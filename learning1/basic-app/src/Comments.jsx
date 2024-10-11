import { useState } from "react";

const Comments=()=>{
    const [comment,setComments]=useState({
        comment:"",
        remarks:""
    })
    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(comment);
        setComments({
            comment:"",
            remarks:""
        })
        

    }
    const handleChange=(event)=>{
        setComments((data)=>{
            return {...data,[event.target.name] :event.target.value}
        })
    }
    return (<>
    <form className="p-6 mx-auto mt-32 w-[500px] grid gap-4 border shadow-lg" onSubmit={handleSubmit} >
        <input
        className="border rounded focus:outline-none focus:ring-2 shadow-lg focus:ring-blue-500"
        placeholder="Add your Comments"
        name="comment"
        onChange={handleChange}
        value={comment.comment}
        />
        <textarea  
        className="border  text-center rounded focus:outline-none focus:ring-2 shadow-lg focus:ring-blue-500 "
        placeholder="Add Remarks"
        name="remarks" 
        value={comment.remarks}
        onChange={handleChange}
/>
        <div className=" border justify-center rounded-lg"><button className= "w-full bg-blue-500 text-xl text-white hover:bg-blue-600 rounded-lg" >submit</button>
        </div>
    </form>
    
    </>)
}
export default Comments;