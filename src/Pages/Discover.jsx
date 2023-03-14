import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import Movie from '../Components/Movie'; 
import axios from 'axios';
import { POPULAR_BASE_URL, img_300, API_KEY, API_URL } from '../Config/config'; 
 


const Discover = () => {
  const [movies, setMovies] = useState([]); 

  const fetchMovies = async () => {
    const { data } = await axios.get(`${API_URL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`); 
    setMovies(data.results)
  }

  useEffect(() => {
    fetchMovies(); 
  }, []) ; 

  console.log(movies); 

  return (
    <Container style={{ marginTop: '20px' }}>  
      <Row>   
        {
          movies?.map( (movie) =>  
            <Col >
                <Movie
                  id={movie.id} 
                  title={movie.title} 
                  rating={movie.vote_average} 
                  image={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} 
                  year={movie.release_date} 
                />
            </Col>
          )
        } 
      </Row>
    </Container>
  )
}

export default Discover