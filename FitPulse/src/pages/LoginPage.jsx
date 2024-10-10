import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../Store/useAuthStore';
import Logo from '../assets/Logo.png'; // Use the correct path for your logo

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuthStore();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      const isAuthenticated = login(values.email, values.password);

      if (isAuthenticated) {
        console.log("Login successful");  // Debug: Confirm login worked
        navigate('/home'); // Redirect after login
      } else {
        alert('Invalid credentials');
      }
    },
  });

  return (
    <div className="min-h-screen w-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-2/5 lg:w-1/4 p-8">
        <div className="flex flex-col justify-center items-center mb-6">
          <img src={Logo} alt="FitPulse Logo" className="w-24 h-24 mb-4" />
          <h1 className="text-xl font-bold mb-6 text-center">Sign in to FitPulse</h1>
        </div>
        <form onSubmit={formik.handleSubmit} className="flex flex-col space-y-4">
          <label className="text-left">Email</label>
          <input
            type="email"
            name="email"
            className="border rounded p-2 mb-2"
            onChange={formik.handleChange}
            value={formik.values.email}
            required
          />
          <label className="text-left">Password</label>
          <input
            type="password"
            name="password"
            className="border rounded p-2 mb-6"
            onChange={formik.handleChange}
            value={formik.values.password}
            required
          />
          <button type="submit" className="bg-blue-700 text-white py-2 px-8 rounded-full hover:bg-blue-800">
            Sign in
          </button>
        </form>
        <p className="text-center mt-4">
          Or{' '}
          <a href="/signup" className="text-blue-600">
            Create New Account
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
