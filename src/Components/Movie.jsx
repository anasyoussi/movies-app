import React from 'react'
import Card from 'react-bootstrap/Card';


const Movie = ({ title, rating, image, year, id }) => {
  return (
    <Card key={id} >
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>  
        <Card.Text>{year}-{rating}</Card.Text>  
      </Card.Body>
    </Card>
  )
}

export default Movie