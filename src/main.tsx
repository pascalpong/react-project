import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
const Main = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
  );
}
export default Main;