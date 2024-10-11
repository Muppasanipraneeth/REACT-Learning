
import './App.css'
import { Link } from 'react-router-dom';

const MainApp=()=>{
  return (<div className='border align-middle'> 
    <div>
      <Link to="/login">      <button type='button' className='ml-3'>login</button>
      </Link>
     <Link to="/signup"> <button type='button' className='ml-3'>signup</button></Link>
    </div>
  </div>)
}

export default MainApp;
