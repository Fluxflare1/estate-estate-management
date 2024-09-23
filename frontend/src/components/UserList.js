// src/components/UserList.js
import React, { useEffect, useState } from 'react';
import { getUsers, createUser, deleteUser } from '../services/userService';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({ name: '', email: '' });

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const response = await getUsers();
        setUsers(response.data);
    };

    const handleAddUser = async () => {
        await createUser(newUser);
        loadUsers();
        setNewUser({ name: '', email: '' }); // Reset form
    };

    const handleDeleteUser = async (id) => {
        await deleteUser(id);
        loadUsers();
    };

    return (
        <div>
            <h2>User List</h2>
            <input
                type="text"
                placeholder="Name"
                value={newUser.name}
                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            />
            <input
                type="email"
                placeholder="Email"
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            />
            <button onClick={handleAddUser}>Add User</button>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} ({user.email})
                        <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
