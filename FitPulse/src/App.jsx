import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar'; // Ensure NavBar is imported
import LandingPage from './pages/LandingPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';

// Create a wrapper component for conditional rendering of the NavBar
const Layout = ({ children }) => {
  const location = useLocation();

  // Do not show the NavBar on the following paths
  const hideNavBarPaths = ['/', '/signup', '/login'];
  const shouldShowNavBar = !hideNavBarPaths.includes(location.pathname);

  return (
    <div className="flex">
      {/* Conditionally render the NavBar */}
      {shouldShowNavBar && <NavBar />}

      {/* Main Content */}
      <div className="flex-grow">
        {children}
      </div>
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
          {/* Add other routes here */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
