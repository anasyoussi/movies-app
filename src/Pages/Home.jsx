import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Movie from '../Components/Movie'; 
import axios from 'axios';
import { POPULAR_BASE_URL } from '../Config/config';
 

const Home = () => { 

  
  const [movies, setMovies] = useState([]); 

  const fetchMovies = async () => {
    const { data } = await axios.get(`${POPULAR_BASE_URL}`); 
    setMovies(data.results)
  }

  useEffect(() => {
    fetchMovies(); 
  }, []) 
console.log(movies)
  return (
    <Container> 
      home
      <Row>  
        <Col md={4} sm={2}>
        {
          movies && movies.map( (movie) =>  
            <Movie
                  id={movie.id} 
                  title={movie.title} 
                  rating={movie.vote_average} 
                  image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                  year={movie.release_date} 
            />
          )
        }
        </Col>
        
      </Row>
    </Container>
  )
}

export default Home