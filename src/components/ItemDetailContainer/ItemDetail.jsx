import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import './ItemDetail.css'; // Importa tus estilos si los tienes

const ItemDetail = ({ product }) => {
  return (
    <Container className='item-detail-container'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.imagen} />
        <Card.Body>
          <Card.Title>{product.Titulo}</Card.Title>
          <Card.Text>Precio: $ {product.Precio} </Card.Text>
          <Card.Text>Categoria: {product.categoria}  </Card.Text>
          <Card.Text>Detalle: {product.Detalle}</Card.Text>
          {/* Agrega más detalles específicos del producto aquí */}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ItemDetail;
