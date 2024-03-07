import { Navigate, useRoutes } from 'react-router-dom';
import ProjectList from './ProjectList';

interface PrivateRoutesProps {
  isAuthenticated: boolean;
}

const PrivateRoutes = ({ isAuthenticated }: PrivateRoutesProps) => {
  let routes = useRoutes([
    // Add your private routes here
    { path: 'dashboard', element: isAuthenticated ? <ProjectList /> : <Navigate to="/login" replace /> },
  ]);

  return routes;
};

export default PrivateRoutes;