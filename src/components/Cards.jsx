import React from 'react'
import Button from "react-bootstrap/Button"; // Importamos el componente Button de bootstrap
import Card from 'react-bootstrap/Card';

const Cards = (props) => {
  return (
    <div>
        <Card className='card'>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button variant="primary">Atrápalo!</Button>
        </Card.Body>
        </Card>
    </div>
  )
}

export default Cards
