import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import loginImg from '../assets/login.jpg';

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/auth/login', { email: username, password });
      localStorage.setItem('token', response.data.token);
      navigate('/home');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='hidden sm:block'>
        <img className='w-full h-full object-cover' src={loginImg} alt="" />
      </div>

      <div className='bg-gray-100 flex flex-col justify-center'>
        <form className='max-w-[400px] w-full mx-auto bg-white p-4' onSubmit={handleSubmit}>
          <h2 className='text-4xl font-bold text-center py-6'>STAFKO.</h2>
          <div className='flex flex-col py-2'>
            <label>Username</label>
            <input className='border p-2' type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className='flex flex-col py-2'>
            <label>Password</label>
            <input className='border p-2' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button className='border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white' type="submit">Sign In</button>
          <div className='flex justify-between'>
            <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
            <Link to="/register" className="text-blue-500">Create an account</Link>
          </div>
        </form>
      </div>
    </div>
  );
}