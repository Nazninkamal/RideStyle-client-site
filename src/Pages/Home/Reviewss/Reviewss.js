import React from 'react';
import { Card } from 'react-bootstrap';

const Reviewss = ({product}) => {
    const {reviewText, name, photoURL,reviewNumber,date} = product;

    return (
        <div className="my-5 ">
            <Card className = "mx-4 rounded-5" style={{ width: '22rem' }}>
        <Card.Img  className = "mx-5 "  style={{width: 100}} variant="top" src={photoURL} />
        <Card.Body className="text-xl-start">
         
         <h5 className="d-flex justify-content-center">{name}</h5>
         <p> {reviewText}</p>
         <p> {reviewNumber} Star</p>
         <p>Review Submitted {date}</p>
         
         <br />

         
        </Card.Body>
      </Card>
        </div>
    );
};

export default Reviewss;