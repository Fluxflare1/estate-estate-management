// src/components/UserEdit.js
import React, { useEffect, useState } from 'react';
import { getUsers, updateUser } from '../services/userService';

const UserEdit = ({ userId, onClose }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const response = await getUsers(userId);
            setUser(response.data);
        };
        fetchUser();
    }, [userId]);

    const handleUpdateUser = async () => {
        await updateUser(userId, user);
        onClose(); // Close edit modal or component
    };

    if (!user) return null;

    return (
        <div>
            <h2>Edit User</h2>
            <input
                type="text"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
            <input
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <button onClick={handleUpdateUser}>Update User</button>
            <button onClick={onClose}>Cancel</button>
        </div>
    );
};

export default UserEdit;
