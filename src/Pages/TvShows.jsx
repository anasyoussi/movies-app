import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';  
import axios from 'axios';
import { POPULAR_BASE_URL, img_300, API_KEY, API_URL } from '../Config/config'; 
import Show from '../Components/Show';


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
                <Show
                  id={movie.id} 
                  title={movie.original_name} 
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