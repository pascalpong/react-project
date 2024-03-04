import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';

const Main = ({location}: {location:any}) => {
  return (
    <div>
      <Routes location={location}>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default Main;