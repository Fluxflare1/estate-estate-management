import React from 'react';

const ProfileSelector = ({ isBusiness, setProfileType }) => {
    return (
        <div>
            <h2>Select Profile Type</h2>
            <button onClick={() => setProfileType(false)}>Personal Profile</button>
            <button onClick={() => setProfileType(true)}>Business Profile</button>
        </div>
    );
};

export default ProfileSelector;
