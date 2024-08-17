import { Link } from "react-router-dom";
const Loginpage=()=>{
    return(<div>
        <div className="border grid justify-center items-center">
            <input type="text" placeholder="enter the the username" className="border" ></input>
            <input type="password" placeholder="enter password" className="border" ></input>
            <Link to="/details"><button type="submit" className="border"> submit</button>
            </Link>
        </div>

    </div>)
}
export default Loginpage;