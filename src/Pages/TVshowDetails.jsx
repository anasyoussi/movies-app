import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import { API_URL, API_KEY, BACKDROP_SIZE } from '../Config/config';
import { AiFillStar } from "react-icons/ai"


function TVshowDetails() {
  let params = useParams();
     
  const [movie, setMovie] = useState({});  
  const [trailer, setTrailer] = useState([]); 
  
  const fetchTrailer = async () => {
    const { data } = await axios.get(`${API_URL}tv/${params.tvId}/videos?api_key=${API_KEY}&language=en-US`) ;
    console.log(data.results)
    setTrailer(data.results[0].key); 
  }
  const fetchMovieDetails = async () => {
    const { data } = await axios.get(`${API_URL}tv/${params.tvId}?api_key=${API_KEY}&language=en-US`);  
    setMovie(data) 
  }

  useEffect(() => {
    fetchMovieDetails(); 
    fetchTrailer()
  }, []) ;  

  return (
    <>
      <Wrapper>
        <WrapperImg img={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}></WrapperImg>
        <div className="MovieDetails">
          <img className='imgPoster' src={`	https://image.tmdb.org/t/p/w300_and_h450_face/${movie.poster_path}`} alt="" />
          <div className='details'>
            <h1>{movie?.original_name}</h1>
            <p className='rating'><AiFillStar /> {movie?.vote_average}</p>
            <p className='genres'></p>
            <p className='details'>
               {movie?.overview}
            </p>
            <div className='ActionBtns'>
              <a href={`https://youtu.be/${trailer}`} target="_blank">Watch trailer</a> 
            </div>
          </div>
        </div>
        {/* <div className="casts">
          <h1>Top Billed Casts</h1>
          <div className="actors">

          </div>
        </div> */}
      </Wrapper>
    </>
  )
}
const WrapperImg = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url(${props => props.img})  ;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100vh; 
  position: absolute;
  z-index: -1;
`;

const Wrapper = styled.div` 
  position: relative;
  color: #ffff;
  & .MovieDetails{
    padding: 60px ; 
    display: flex;
    justify-content: space-between;
    align-items: center;
     & .imgPoster{
      border-radius: 10px;
      max-height: 400px;
      box-shadow: 0px 0px 17px 0px rgba(0,0,0,0.52);
     }
     & .details{
      padding: 20px;
      & .rating{ 
       
      }
      & .ActionBtns a{
          text-decoration: none;
          padding: 15px;
          min-width: 200px;
          background: #0086e0;
          color: #fff;
          border: 1px solid #0086e0;
          border-radius: 5px;
          cursor: pointer;
      }
     }
  }
`;



export default TVshowDetails