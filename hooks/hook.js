import React from "react";
import ReactDOM from "react-dom";
import {useState} from "react";
const Increment=()=>{
  const [count, setcount] = useState(0);
  return (<>
  
  <h3> the count is {count}</h3>
  <p> here is it count is even or odd {count%2==0 ? 'even' :'odd'} </p>
<button onClick={()=>{setcount(count+1)}}>increase</button>
<button onClick={()=>{setcount(count-1)}}>decrease</button>
  </>)
  
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Increment></Increment>);

/* 


import React from "react";
import ReactDOM from "react-dom";
import {useState} from "react";


const Increment=()=>{
  const [count, setcount] = useState(0);
  const Increase=()=>{
    setcount(count=>count+1);
  }
  const  Decrease=()=>{
    setcount(count=>count-1);
  }
  return (<>
  
  <h3> the count is {count}</h3>
  <p> here is it count is even or odd {count%2==0 ? 'even' :'odd'} </p>
<button onClick={Increase}>increase</button>
<button onClick={Decrease}>decrease</button>
  </>)
  
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Increment></Increment>);
*/
{/* <button type="button" class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">
  Hover me
</button> */}
/*

import React from "react";
import ReactDOM from "react-dom";
import {useState,useEffect} from "react";
const APP=()=>{
  const [resourceType,setresoucrceType]=useState("posts");
  useEffect(()=>{
    console.log(" this is rendered");
  },[resourceType]);// here what ever you change if these should effect then pass it in the array then if that changes this effects
// in the array this are called as the dependency

  return (<>
  <div>
    <button onClick={()=>{setresoucrceType("posts")}}>posts</button>
    <button onClick={()=>{setresoucrceType("users")}}>users</button>
    <button onClick={()=>{setresoucrceType("comments")}}>comments</button>
    
  </div>
  <h4> {resourceType}</h4>
  
  
  </>)
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<APP></APP>);

*/