import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './SignupValidation';
import axios from 'axios';

const Signup = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
    });
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const handleSubmit = async (event) => {
        event.preventDefault();
        const validationErrors = Validation(values);
        setErrors(validationErrors);

        if (!Object.keys(validationErrors).length) {
            try {
                await axios.post('http://localhost:8081/signup', values);
                navigate('/');
            } catch (err) {
                console.log(err);
            }
        }
    };

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    return (
        <div className="flex justify-center items-center bg-amber-20 min-h-screen">
            <div className="bg-white p-6 rounded-lg shadow-2xl w-96">
                <h1 className="flex justify-center text-2xl font-bold mb-4">Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700">Name</label>
                        <input type="text" id="name" placeholder="Enter Name" name="name"
                            onChange={handleInput} className="border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none w-full px-4 py-2" />
                        {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <input type="email" id="email" placeholder="Enter Email" name="email"
                            onChange={handleInput} className="border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none w-full px-4 py-2" />
                        {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">Password</label>
                        <input type="password" id="password" placeholder="Enter Password" name="password"
                            onChange={handleInput} className="border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none w-full px-4 py-2" />
                        {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
                    </div>
                    <button type="submit" className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-500 focus:outline-none">Sign Up</button>
                    <p className="mt-4 text-sm text-gray-600">You agree to our terms and policies</p>
                    <Link to="/" className="w-full mt-4 block bg-transparent border border-gray-300 text-gray-700 py-2 rounded-md text-center hover:bg-gray-100 focus:outline-none">Log In</Link>
                </form>
            </div>
        </div>
    );
};

export default Signup;
