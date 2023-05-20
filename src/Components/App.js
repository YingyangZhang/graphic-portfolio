import '../index.css';
import Home from './Home/Home';
import Inspection from './Inspection/Inspection';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return(
    <div className='app'>
      <Routes>
        <Route path='/' element={ <Home /> } />

        <Route path='/:id' element={ <Inspection /> } />
      </Routes>
    </div>
  )
}

