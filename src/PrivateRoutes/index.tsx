import { Navigate, useLocation } from 'react-router-dom';
import React from 'react';

interface PrivateRouteProps {
  isAuthenticated: boolean;
  children: React.ReactElement | null;
}

const PrivateRoute = ({ isAuthenticated, children }: PrivateRouteProps) => {
  const location = useLocation();

  return isAuthenticated ? (children || <React.Fragment />) : <Navigate to="/info#serial" replace state={{ from: location }} />;
};

export default PrivateRoute;