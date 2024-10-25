import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex">
        <ul>
            <li><Link to="/" >home</Link></li>
            <li><Link to="/contact">contact</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/signup" >signup</Link></li>
        </ul>
    </div>
  )
}

export default Navbar