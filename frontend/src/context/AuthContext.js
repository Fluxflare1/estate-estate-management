// src/context/AuthContext.js

import { createContext, useState, useEffect } from 'react';

// Create the AuthContext
export const AuthContext = createContext();

// AuthProvider component to provide state to the entire app
export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        isAuthenticated: false,
        user: null,
    });

    // Check if the user is already logged in (use local storage or session)
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setAuthState({
                isAuthenticated: true,
                user: storedUser,
            });
        }
    }, []);

    // Function to log in a user
    const login = (userData) => {
        setAuthState({
            isAuthenticated: true,
            user: userData,
        });
        localStorage.setItem('user', JSON.stringify(userData)); // Save user data in local storage
    };

    // Function to log out a user
    const logout = () => {
        setAuthState({
            isAuthenticated: false,
            user: null,
        });
        localStorage.removeItem('user'); // Remove user data from local storage
    };

    return (
        <AuthContext.Provider value={{ authState, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
