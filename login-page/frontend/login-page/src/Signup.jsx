import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Signup = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate that all fields are filled
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.confirmPassword) {
            alert("All fields are required");
            return;
        }

        // Check if passwords match
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const response = await axios.post("http://localhost:3000/signup", {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                password: formData.password
            });
            alert("The data has been saved to the database");
            navigate("/login");
        } catch (err) {
            if (err.response) {
                alert(`Error: ${err.response.data}`);
            } else {
                alert("An unexpected error occurred");
            }
            console.error("Error:", err);
        }
    };

    return (
        <div className=" ml-24 mt-5 p-2 border w-1/4  bg-gray-100 items-center justify-center">
            <h1 className=" ml-24 text-[24px] justify-center items-center content-center"> Signup</h1>
            <form onSubmit={handleSubmit} className="grid m-4">
                <input
                    className="border m-1 p-1"
                    type="text"
                    name="firstName"
                    placeholder="Enter the first name"
                    onChange={handleChange}
                    value={formData.firstName}
                />
                <input
                    className="border m-1 p-1"
                    type="text"
                    name="lastName"
                    placeholder="Enter the last name"
                    onChange={handleChange}
                    value={formData.lastName}
                />
                <input
                    className="border m-1 p-1"
                    type="email"
                    name="email"
                    placeholder="Enter the email"
                    onChange={handleChange}
                    value={formData.email}
                />
                <input
                    className="border m-1 p-1"
                    type="password"
                    name="password"
                    placeholder="Enter the password"
                    onChange={handleChange}
                    value={formData.password}
                />
                <input
                    className="border m-1 p-1"
                    type="password"
                    name="confirmPassword"
                    placeholder="Re-enter the password"
                    onChange={handleChange}
                    value={formData.confirmPassword}
                />
                <button className="border bg-blue-500 text-white" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Signup;
