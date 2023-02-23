import './App.css' 
import { Route, Routes } from 'react-router-dom';
import MoviesNavbar from './Pages/MoviesNavbar';
import Home from './Pages/Home';
import Trending from './Pages/Trending';
import Discover from './Pages/Discover';
import TvShows from './Pages/TvShows';
import Login from './Pages/Login'; 
import Signup from './Pages/Signup';
 
 
function App() {  
  return ( 
      <>
        <MoviesNavbar />   
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/trending' element={<Trending />}></Route>
          <Route path='/discover' element={<Discover />}></Route>
          <Route path='/tvshows' element={<TvShows />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
        </Routes>
      </>   
  )
}

export default App
