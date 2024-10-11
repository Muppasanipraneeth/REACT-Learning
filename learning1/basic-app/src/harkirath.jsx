// Header component
import PropTypes from "prop-types";
import { useState } from "react";
const Header = (props) => {
    const { title } = props;
   
    return (
        <>
            <h1>My name is: {title}</h1>
        </>
    );
};

// Main Apps component
const Apps = () => {
    const [title,setTitle]=useState("Praneeth")
    const changeTitle=()=>{
        setTitle("my name"+Math.random());

    }
    return (
        
        <>
                <button onClick={changeTitle}>click</button>

            <Header title={title} />
            <Header title="praneeth" />
        </>
    );
};

export default Apps;
Header.propTypes={
    title:PropTypes.string.isRequired
};