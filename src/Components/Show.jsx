import React from 'react' 
import styled from 'styled-components'; 
 

const Show = ({ title, rating, image, year, id }) => { 
  return (  
    <Card className="card" key={id}>
      <Img className="card-img-top" src={image} alt="" />
      <CardBody className="card-body">
          <Title className="card-title"><a href={`/tv/${id}`}>{ title.length > 15 ? `${title.substring(0, 19)}...` :  title  }</a></Title> 
          <CardText className="card-text">
            { year.split('-')[0] } 
          </CardText>
          <Rating>{rating}</Rating>
      </CardBody> 
    </Card> 
  )
}

const Card = styled.div`
  width: 200px;
  position: relative; 
  margin-bottom: 15px;
`; 
const Img = styled.img`
  width: 100%;
`; 
const Title = styled.h4`
  font-size: 1rem;
  height: deviceHeight('100%');
  white-space: nowrap;
  a{
    text-decoration: none;
    color: black ;
  }
`;
const Rating = styled.p`
  position: absolute;
  top:0; 
  left: 0;
  background-color: red;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  padding: 5px 9px;
  border-bottom-right-radius: 5px;
`; 
const CardBody = styled.div`
  padding: 0px 10px;
  padding-top: 15px;
`;
const CardText = styled.p`
  padding: 0px;
  padding-bottom: 10px;
  margin: 0px;
`;

export default Show