import React from 'react'
import './ItemListContainer.css'
import Container from 'react-bootstrap/Container';

const ItemListContainer = (props) => {
  return (
    <Container className='productsSection'>
        <h2 className='productsTittle'>PRODUCTOS</h2>

        <Container className='productsContainer'>
            
        {props.children}
        </Container>
        
    </Container>
  )
}

export default ItemListContainer