import { Navigate, useLocation } from 'react-router-dom';
import React from 'react';

interface PrivateRouteProps {
  children: React.ReactElement | null;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const location = useLocation();
  
  const isAuthenticated = () => {
    try {
      const access = localStorage.getItem('access');
      if (!access) return false;
      const accessData = JSON.parse(access);
      return accessData?.data?.authenticated === true;
    } catch {
      return false;
    }
  };

  return isAuthenticated() ? (
    children || <React.Fragment />
  ) : (
    <Navigate to="/info#serial" replace state={{ from: location }} />
  );
};

export default PrivateRoute;