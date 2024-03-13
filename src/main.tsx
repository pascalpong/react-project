import { useRoutes } from 'react-router-dom';
import Home from './components/Home';
import Information from './components/Information'; 
import PrivateRoute from './PrivateRoutes';
import Projects from './PrivateRoutes/Projects';

const Main = ({ isAuthenticated }: { isAuthenticated: boolean }) => { 
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/info', element: <Information /> },
    { path: '/projects', element: <PrivateRoute isAuthenticated={isAuthenticated} children={<Projects />} /> },
  ]);

  return <div>{routes}</div>;
};

export default Main;