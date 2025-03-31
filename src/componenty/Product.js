import React from 'react'
import { Card } from 'react-bootstrap'
import Hodnoceni from './hodnoceni'
import { Link } from 'react-router-dom'

function Product({product}) {
  return (
    <Card className='my-3 p-3 rounded'>
        <Link to={`/produkt/${product._id}`}>
        <Card.Img src={`https://backend-ct8d.onrender.com${product.image}`}></Card.Img>
        </Link>
        <Card.Body>
        <Link to={`/produkt/${product._id}`}>
        <Card.Title as="div">
            <strong>{product.produktnazev}</strong>
        </Card.Title>
        </Link>

        <Card.Text as="div">
            <div className='my-3'>
                {product.hodnoceni} z {product.recenze} recenzí
            </div>
        </Card.Text>
        <Card.Text as="h5">
            
               <strong>{product.cena} CZK</strong> 

        </Card.Text>
        <Hodnoceni
            hodnota={product.hodnoceni}
            text={` ${product.recenze} recenzí`}
        />
        </Card.Body>
    </Card>
  )
}

export default Product
