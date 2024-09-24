import React, { useState } from 'react';
import ProfileSelector from './ProfileSelector';

const Dashboard = () => {
    const [isBusiness, setIsBusiness] = useState(false);

    return (
        <div>
            <h1>User Dashboard</h1>
            <ProfileSelector isBusiness={isBusiness} setProfileType={setIsBusiness} />
            {isBusiness && <h2>Create Business Account</h2>}
            {/* Add more components as necessary */}
        </div>
    );
};

export default Dashboard;
