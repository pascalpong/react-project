import { Routes, Route } from 'react-router-dom';
import Portfolio from './components/portfolio/Portfolio';
import Projects from './PrivateRoutes/Projects';
import PrivateRoute from './PrivateRoutes/index';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route
        path="/projects"
        element={
          <PrivateRoute>
            <Projects />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default App;
