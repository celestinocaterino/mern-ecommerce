import React from 'react'
import {Card} from 'react-bootstrap'
export const Product = ({product}) => {
    return (
        <Card className="my-3 p-3 rounded">
           <Card.Img variant="top" src={product.image}/>
           <Card.Body>
               <Card.Title as="div">
                <strong>{product.name}</strong>
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
