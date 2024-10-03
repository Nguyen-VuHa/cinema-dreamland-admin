import Cookies from 'js-cookie';
import React from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  children: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    const isAuthenticated = Cookies.get("access_token")


    return !isAuthenticated ? <Navigate to="/auth" replace /> : children;
};

export default PrivateRoute;