import { useRoutes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Information from './components/Information';
import PrivateRoutes from './PrivateRoutes'; // This is the component that requires authentication

const Main = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/info', element: <Information /> },
    { path: '/private', element: isAuthenticated ? <PrivateRoutes isAuthenticated={isAuthenticated} /> : <Navigate to="/info#serial" replace /> },
  ]);

  return <div>{routes}</div>; // Wrap the routes in a div
};

export default Main;