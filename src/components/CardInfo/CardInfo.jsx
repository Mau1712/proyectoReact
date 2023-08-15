import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




const CardInfo = (props) => {
  return (
    <Card className="text-center">
      <Card.Header>Featured</Card.Header>
      <Card.Img variant="top" src={props.imagen} />
      <Card.Body>
        <Card.Title>{props.nombre}</Card.Title>
        <Card.Text>{props.detalle}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  )
}

export default CardInfo