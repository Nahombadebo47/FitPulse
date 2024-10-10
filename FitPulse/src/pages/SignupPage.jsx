import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import { useAuthStore } from '../Store/useAuthStore';

const SignupPage = () => {
  const navigate = useNavigate();
  const { signup } = useAuthStore(); // Zustand signup function

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      const isSignedUp = signup(values.name, values.email, values.password); // Perform signup

      if (isSignedUp) {
        navigate('/home'); // Redirect to Home Page after successful signup
      } else {
        alert('Error creating account'); // Handle failed signup
      }
    },
  });

  return (
    <div className="min-h-screen w-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-4/5 lg:w-3/5 xl:w-2/5 p-8">
        <h1 className="text-xl font-bold mb-4 text-center">Create New Account</h1>
        <form onSubmit={formik.handleSubmit} className="flex flex-col">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            className="border rounded p-2 mb-4"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="border rounded p-2 mb-4"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="border rounded p-2 mb-4"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <button type="submit" className="bg-blue-700 text-white py-2 px-8 rounded mb-4">
            Join
          </button>
        </form>
        <p className="text-center">
          Or <a href="/login" className="text-blue-600">Sign in to existing account</a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
