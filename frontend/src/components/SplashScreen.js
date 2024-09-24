import React, { useEffect } from 'react';
import './SplashScreen.scss'; // Import your styling

const SplashScreen = ({ onSplashEnd }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onSplashEnd();
        }, 3000); // Adjust duration as needed

        return () => clearTimeout(timer);
    }, [onSplashEnd]);

    return (
        <div className="splash-screen">
            <h1>Your Logo</h1>
            <p>Welcome to Estate Management System</p>
        </div>
    );
};

export default SplashScreen;
<div class="splash-screen">
    <h1>Welcome to Estate Management</h1>
</div>
import React from 'react';
import './SplashScreen.css'; // Make sure to create this CSS file

const SplashScreen = () => {
    return (
        <div className="splash-screen">
            Welcome to the Estate Management System
        </div>
    );
}

export default SplashScreen;
