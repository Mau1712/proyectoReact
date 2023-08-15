import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import AddCartBtn from '../AddCartBtn/AddCartBtn';
import './CardItem.css';


const CardItem = (props) => {
    return (
        
        
        <Container className='productCard' >
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.imagen} />
                <Card.Body>
                    <Card.Title>{props.nombre}</Card.Title>
                    <Card.Text>{props.cantidad} </Card.Text>
                    <Card.Text>Precio: $ {props.precio} </Card.Text>
                    <Card.Text>Categoria: {props.categoria}  </Card.Text>
                    

                    <div className='cardButtons'>
                    <AddCartBtn/>
                    <Button className='cardButton' variant="" >Detalles</Button>

                    </div>
                    
                </Card.Body>
            </Card>
        </Container>


        
    )
}

export default CardItem