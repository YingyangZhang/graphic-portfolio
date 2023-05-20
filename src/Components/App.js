import '../index.css';
import Home from './Home/Home';
import Inspection from './Inspection/Inspection';
import { Route, Routes } from 'react-router-dom';
import ScrollRestoration from './ScrollRestoration';

export default function App() {
  return(
    <div className='app'>
      <ScrollRestoration />

      <Routes>
        <Route path='/' element={ <Home /> } />

        <Route path='/:id' element={ <Inspection /> } />
      </Routes>
    </div>
  )
}

