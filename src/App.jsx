import './App.css' 
import { Route, Routes } from 'react-router-dom';
import MoviesNavbar from './Pages/MoviesNavbar';
import Home from './Pages/Home';
import Trending from './Pages/Trending';
import Discover from './Pages/Discover';
import TvShows from './Pages/TvShows';
import Login from './Pages/Login'; 
import Signup from './Pages/Signup';
import MovieDetails from './Pages/MovieDetails';
import TVshowDetails from './Pages/TVshowDetails';
 
 
function App() {  
  return ( 
      <>
        <MoviesNavbar />   
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/movie/:movieId' element={<MovieDetails />}  action={({ params }) => {}}></Route> 
          <Route path='/tv/:tvId' element={<TVshowDetails />}  action={({ params }) => {}}></Route> 
          <Route path='/discover' element={<Discover />}></Route>
          <Route path='/tvshows' element={<TvShows />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
        </Routes>
      </>   
  )
}

export default App
