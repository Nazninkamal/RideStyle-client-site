import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllProduct = ({product}) => {
    const {_id, name, img, description, purchase} = product;

    return (
        <div>
            <Card className = "mx-4 rounded-3" style={{ width: '22rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body className="text-xl-start">
         <h5>{name}</h5>
         <p> {description}</p>
         <p>Price: ${purchase}</p>
         
         <br />

          <Link to={`/purchase/${_id}`}><Button variant="primary">Purchase</Button></Link>
        </Card.Body>
      </Card>
        </div>
    );
};

export default AllProduct;