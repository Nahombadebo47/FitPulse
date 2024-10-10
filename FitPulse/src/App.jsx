import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import LandingPage from './pages/LandingPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage'; // Assuming this is implemented

// Create a wrapper component for conditional rendering of the NavBar
const Layout = ({ children }) => {
  const location = useLocation();

  // Do not show the NavBar on these specific paths
  const hideNavBarPaths = ['/', '/signup', '/login'];
  const shouldShowNavBar = !hideNavBarPaths.includes(location.pathname);

  return (
    <div className="flex">
      {shouldShowNavBar && <NavBar />} {/* Show NavBar only if not in excluded paths */}
      <div className="flex-grow">{children}</div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} /> {/* Home page route */}
          {/* Add other routes here when needed */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
