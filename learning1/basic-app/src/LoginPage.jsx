import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
    const [form, setForm] = useState({
        Username: "",
        password: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value
        }));
    };

    const formSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted:", form);
        setForm({
            Username: "",
            password: ""
        })
    };

    return (
        <>
            <form className="border p-6 mx-auto mt-32 w-[300px] grid gap-4 shadow-lg" onSubmit={formSubmit}>
                <h1 className="text-center text-xl font-semibold mb-4">Sign In With</h1>
                <div className="flex justify-center gap-4">
                    <div className="flex justify-center items-center w-[80px] rounded-lg border p-2 cursor-pointer hover:bg-gray-100">
                        <FaFacebook className="text-blue-600 text-2xl" />
                    </div>
                    <div className="flex justify-center items-center w-[80px] rounded-lg border p-2 cursor-pointer hover:bg-gray-100">
                        <FcGoogle className="text-2xl" />
                    </div>
                </div>
                <input
                    className="w-full border p-2 rounded focus:outline-none focus:ring-2 shadow-lg focus:ring-blue-500"
                    placeholder="Enter Email"
                    type="email"
                    name="Username"
                    value={form.Username}
                    onChange={handleChange}
                />
                <input
                    className="w-full border p-2 rounded focus:outline-none focus:ring-2 shadow-lg focus:ring-blue-500"
                    placeholder="Enter Password"
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                />
                <div className="flex justify-center mt-4">
                    <button className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                        Login
                    </button>
                </div>
            </form>
        </>
    );
};

export default LoginPage;
