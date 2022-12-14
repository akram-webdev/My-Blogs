import { Route, Routes } from 'react-router-dom';
import './App.css';
import Html from './Pages/Blogs/Html';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import Navbar from './Pages/Shared/Navbar';
import NotFound from './Pages/Shared/NotFound';

function App() {
  return (
    <div  className='mx-8'>
       <Navbar/>
       <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/Html' element={<Html/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>


          <Route path='*' element={<NotFound/>}></Route>

       </Routes>
    </div>
  );
}

export default App;
