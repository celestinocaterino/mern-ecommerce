import React from 'react'
import {Card} from 'react-bootstrap'
export const Product = ({product}) => {
    return (
        <Card className="my-3 p-3 rounded">
           <a href=""><Card.Img variant="top" src={product.image}/></a>
           <Card.Body>
               <Card.Title as="div">
                <a href=""><strong>{product.name}</strong></a>
               </Card.Title>
               <Card.Text as="div">
                {product.rating} from {product.numReviews} reviews
               </Card.Text>
               <Card.Text as="h3">
                {product.price}
               </Card.Text>
           </Card.Body>
        </Card>
    )
}
