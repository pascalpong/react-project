import './App.css';
import Box from '@mui/material/Box'; 
import RouteManagement from './RouteManagement';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import AuthProvider from './AuthProvider';
import { Routes, Route } from 'react-router-dom';
import Information from './components/Information';
import Projects from './PrivateRoutes/Projects';
import PrivateRoute from './PrivateRoutes/index';

const App = () => {
  return (
    <Routes>
      <Route path="/info" element={<Information />} />
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