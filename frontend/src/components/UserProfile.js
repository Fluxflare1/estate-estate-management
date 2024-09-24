import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = () => {
    const [profile, setProfile] = useState({
        username: '',
        email: '',
        phone_number: '',
        address: '',
        profile_image: ''
    });

    const [file, setFile] = useState(null);

    useEffect(() => {
        // Fetch user profile data
        const fetchProfile = async () => {
            const response = await axios.get('/api/profile/');
            setProfile(response.data);
        };
        fetchProfile();
    }, []);

    const handleChange = (e) => {
        setProfile({
            ...profile,
            [e.target.name]: e.target.value
        });
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('username', profile.username);
        formData.append('email', profile.email);
        formData.append('phone_number', profile.phone_number);
        formData.append('address', profile.address);
        if (file) {
            formData.append('profile_image', file);
        }

        try {
            await axios.put('/api/profile/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert('Profile updated successfully');
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    return (
        <div>
            <h2>Edit Profile</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    value={profile.username}
                    onChange={handleChange}
                    placeholder="Username"
                />
                <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
                <input
                    type="text"
                    name="phone_number"
                    value={profile.phone_number}
                    onChange={handleChange}
                    placeholder="Phone Number"
                />
                <textarea
                    name="address"
                    value={profile.address}
                    onChange={handleChange}
                    placeholder="Address"
                />
                <input
                    type="file"
                    name="profile_image"
                    onChange={handleFileChange}
                />
                <button type="submit">Update Profile</button>
            </form>
        </div>
    );
};

export default UserProfile;
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
