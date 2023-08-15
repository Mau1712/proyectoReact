import React from 'react'
import { Container } from 'react-bootstrap'
import CardInfo from './CardInfo'
import data from '../../data/itemList.json'

const CartInfoContainer = () => {
    return (
        <Container>
            <CardInfo>
                {data.map(item =>
                    <CardItem
                        key={item.id}
                        imagen={item.imagen}
                        nombre={item.Titulo}
                        precio={item.Precio}
                        categoria={item.categoria}
                    />
                )}
            </CardInfo>
        </Container>
    )
}

export default CartInfoContainer