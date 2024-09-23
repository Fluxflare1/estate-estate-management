import React, { useEffect, useState } from 'react';

const UserComponent = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('/api/users/')
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);

    return (
        <div>
            <h2>Users List</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.username}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserComponent;
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserComponent = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await axios.get('/api/users/'); // Adjust endpoint as needed
            setUsers(response.data);
        };
        fetchUsers();
    }, []);

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.username}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserComponent;
