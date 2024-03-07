import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Information from './components/Information';
import { Container } from '@mui/joy';

const Main = ({location}: {location:any}) => {
  return (
    <Container>
      <Routes location={location}>
        <Route path='/' element={<Home/>} />
        <Route path='/info' element={<Information/>} />
      </Routes>
    </Container>
  );
}

export default Main;