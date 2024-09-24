// src/components/PrivateRoute.js

import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { authState } = useContext(AuthContext);

    return authState.isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
