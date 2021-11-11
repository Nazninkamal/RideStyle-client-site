import React from 'react';
import { Button, Card } from 'react-bootstrap';


const Blog = () => {
    return (
        <div className="row my-5 p-5 text-xl-start">
            <h2 className="my-5">LATEST ON BLOGS</h2>
           <div className="col-md-4">
           <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://i.ibb.co/r7WQVyB/social-twitter-help-advice-product-help-how-to-adjustments-bike-set-up.png" />
  <Card.Body>
    <Card.Title>New Bicyle setup instructions</Card.Title>
    <Card.Text>
    Be careful not to over tighten as this can cause damage. Tredz recommend using a torque wrench to tighten bolts to manufacturer recommended settings
    </Card.Text>
    <Button variant="primary">More</Button>
  </Card.Body>
</Card>
           </div>
           <div className="col-md-4">
           <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://i.ibb.co/8sXWQJh/set-seat-8-1497871882598-1roaruhd7rheu-f99c6fe-e1618238160229.png" />
  <Card.Body>
    <Card.Title>Set your saddle height </Card.Title>
    <Card.Text>
      Place your heel on the pedal and pedal backwards to reach the six o'clock position. Your knee should be completely straight. If your knee is still bent you need to increase the height,
    </Card.Text>
    <Button variant="primary">More</Button>
  </Card.Body>
</Card>
</div>
<div className="col-md-4">
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://i.ibb.co/SVYBSBL/images.png" />
  <Card.Body>
    <Card.Title>Bike light comparison</Card.Title>
    <Card.Text>
    Beamshot photos were taken at least 1 hour after sunset on a multi-use path with no street lighting or other ambient lighting. The reflective markers were set down in 10 foot intervals,
    </Card.Text>
    <Button variant="primary">More</Button>
  </Card.Body>
</Card>
</div>

        </div>
    );
};

export default Blog;