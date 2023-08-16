import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import ItemList from '../ItemList/ItemList';
import Loader from '../Loader';
import './ItemListContainer.css';

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    setTimeout(() => {
      fetch('productsBD.json')
        .then((res) => res.json())
        .then((data) => setProductList(data))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false)); 
    }, 2000); 
  }, []);

  return (
    <Container className='productsSection'>
      
      <Container className='productsContainer'>
        {loading ? <Loader /> : <ItemList products={productList} />}
      </Container>
    </Container>
  );
};

export default ItemListContainer;
