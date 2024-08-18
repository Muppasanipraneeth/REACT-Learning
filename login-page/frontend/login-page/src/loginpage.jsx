import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Loginpage = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); // Clear previous error
        console.log("Clicked on the submit button");

        try {
            const response = await axios.post('http://localhost:3000/login', formData);
            if (response.status === 200) {
                alert('Login successful');
                navigate('/details');  // Navigate to details page upon successful login
            }
        } catch (error) {
            // Check if the error is related to authentication
            if (error.response && error.response.status === 401) {
                setError("Invalid email or password. Please try again.");
            } else {
                setError("Server error. Please try again later.");
            }
        }
    };

    return (
        <div className="border w-2/6 ml-36 mt-3 bg-gray-100 justify-center items-center">
            <h1 className="text-[24px] ml-24 ">Login</h1>
            <form onSubmit={handleSubmit} className="grid p-4">
                <input 
                    type="text" 
                    name="email"  
                    placeholder="Enter your email" 
                    className="border" 
                    onChange={handleChange} 
                    value={formData.email} 
                />
                <input 
                    type="password" 
                    name="password"  
                    placeholder="Enter your password" 
                    className="border" 
                    onChange={handleChange} 
                    value={formData.password} 
                />
                <button type="submit" className="border bg-blue-500 text-white">Submit</button>
            </form>
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default Loginpage;
