import { Link } from "react-router-dom";

const Signup =()=>{
    return (<div>
        <div className="grid items-center justify-center"> 
            <input className=" border" type="text" placeholder="Enter the first name" /> 
            <input className=" border"  type="text" placeholder="Enter the Last name" /> 
            <input className=" border"  type="text" placeholder="Enter the email" /> 
            <input  className=" border" type="text" placeholder="Enter the password" /> 
            <input className=" border" type="text" placeholder="Re Enter the password" />
            <Link  to="/login"><button  className=" border" type="submit"> submit</button>
            </Link>
        </div>
    </div>)
}
export  default Signup;