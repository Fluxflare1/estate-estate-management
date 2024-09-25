// src/components/LandingPage.js
import React from 'react';
import './LandingPage.css'; // Create a separate CSS file for styling

const LandingPage = () => {
    return (
        <div className="landing-page">
            <header className="landing-header">
                <h1>Welcome to Our Property Management Solution</h1>
                <p>Manage your properties effortlessly and efficiently.</p>
                <button className="cta-button">Get Started</button>
            </header>
            <section className="features">
                <h2>Features</h2>
                <ul>
                    <li>Property Listings</li>
                    <li>Tenant Management</li>
                    <li>Billing and Payments</li>
                    <li>Google Maps Integration</li>
                </ul>
            </section>
        </div>
    );
};

export default LandingPage;
