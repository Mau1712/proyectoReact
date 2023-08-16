import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';

import Loader from '../Loader';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setTimeout(() => {
      fetch('/productsBD.json')
        .then((res) => res.json())
        .then((data) => {
          const selectedProduct = data.find(item => item.id === id);
          setProduct(selectedProduct);
        })
        .catch((error) => console.error(error))
        .finally(() => setLoading(false)); 
    }, 2000);
  }, [id]);

  return (
    <div className='item-detail-container'>
      {loading ? (<Loader /> ) : product ? (<ItemDetail product={product} />) : (<p>Producto no encontrado</p>)}
    </div>
  );
};

export default ItemDetailContainer;
