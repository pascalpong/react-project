import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Information from './components/Information';

const Main = ({location}: {location:any}) => {
  return (
    <div>
      <Routes location={location}>
        <Route path='/' element={<Home/>} />
        <Route path='/info' element={<Information/>} />
      </Routes>
    </div>
  );
}

export default Main;