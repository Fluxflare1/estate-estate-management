// frontend/src/components/UserProfile.js
import React, { useEffect, useState } from 'react';
import { getUserProfile, updateUserProfile } from '../api/userApi';

const UserProfile = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await getUserProfile();
                setUser(response.data);
            } catch (err) {
                setError('Error fetching user profile');
            } finally {
                setLoading(false);
            }
        };
        fetchUserProfile();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateUserProfile(user);
            alert('Profile updated successfully');
        } catch (err) {
            setError('Error updating profile');
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <form onSubmit={handleSubmit}>
            <h2>User Profile</h2>
            <div>
                <label>Username:</label>
                <input type="text" name="username" value={user.username} onChange={handleChange} readOnly />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email" value={user.email} onChange={handleChange} readOnly />
            </div>
            <div>
                <label>Phone Number:</label>
                <input type="text" name="phone_number" value={user.phone_number} onChange={handleChange} />
            </div>
            <div>
                <label>Address:</label>
                <textarea name="address" value={user.address} onChange={handleChange}></textarea>
            </div>
            <button type="submit">Update Profile</button>
        </form>
    );
};

export default UserProfile;
