// src/pages/LandingPage.jsx
import React from 'react';
import Logo from '../assets/Logo.png';

const LandingPage = () => {
    return (
     <div>
        <img src={Logo} alt='Fitpulse Logo'  />
        <div>
            <h3 className='text-blue-800'>Start your Fitness Journey Today</h3>
            <p>Join our Community of Fitness Enthusiasts</p>
            <button>Join</button>
        </div>
        <div>
            <h3>Already a Member, Click Sign in </h3>
            <button>Sign in</button>
        </div>
     </div>
    )
};

export default LandingPage;
