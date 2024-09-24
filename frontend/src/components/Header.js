// src/components/Header.js

import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
    const { authState, logout } = useContext(AuthContext);

    return (
        <header>
            <h1>Estate Management</h1>
            {authState.isAuthenticated ? (
                <button onClick={logout}>Logout</button>
            ) : (
                <a href="/login">Login</a>
            )}
        </header>
    );
};

export default Header;
