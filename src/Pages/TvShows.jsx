import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import Movie from '../Components/Movie'; 
import axios from 'axios';
import { POPULAR_BASE_URL, img_300, API_KEY, API_URL } from '../Config/config'; 


const TvShows = () => {
  const [movies, setMovies] = useState([]); 

  const fetchMovies = async () => {
    const { data } = await axios.get(`${API_URL}/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`); 
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
                  title={movie.name} 
                  rating={movie.vote_average} 
                  image={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} 
                  year={movie.first_air_date} 
                />
            </Col>
          )
        } 
      </Row>
    </Container>
  )
}

export default TvShows