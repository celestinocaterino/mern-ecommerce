import {Card} from 'react-bootstrap'
import { Rating } from '../components/Rating'
import {Link} from 'react-router-dom' 
import { motion } from "framer-motion"

export const Product = ({product}) => {
    return (
        <motion.div whileHover={{ scale: 1.02 }}>
            <Card className="my-3 p-3 rounded" >
            <Link to={'product/'+product._id}><Card.Img variant="top" src={product.image}/></Link>
            <Card.Body>
                <Card.Title as="div">
                <Link to={'product/'+product._id}><strong>{product.name}</strong></Link>
                </Card.Title>
                <Card.Text as="div">
                    <Rating value={product.rating} text={product.numReviews+" reviews"}></Rating>
                </Card.Text>
                
                <Card.Text as="h3">
                    {product.price}
                </Card.Text>
            </Card.Body>
            </Card>

        </motion.div>
        
    )
}
