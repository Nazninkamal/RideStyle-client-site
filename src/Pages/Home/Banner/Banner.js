import React from 'react';
import './Banner.css'
import { Button, Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner-1.png'
import banner2 from '../../../images/banner/banner-2.png'
import banner3 from '../../../images/banner/banner-3.png'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <>
           <Carousel>
               
  <Carousel.Item>
    <img
      className="d-block w-100 h-100"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
    <h2 className="font">Best Cycling Experience</h2>
    <h5 className="font">Become the world leader on the internet for the sport of cycling.</h5>
    <Link to={`/allproduct`}><Button variant="primary">Explore Now</Button></Link>
    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />

    <Carousel.Caption>
    <h2 className="font">Best Cycling Experience</h2>
    <h5 className="font">Become the world leader on the internet for the sport of cycling.</h5>
    <Link to={`/allproduct`}><Button variant="primary">Explore Now</Button></Link>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h2 className="font">Best Cycling Experience</h2>
    <h5 className="font">Become the world leader on the internet for the sport of cycling.</h5>
    <Link to={`/allproduct`}><Button variant="primary">Explore Now</Button></Link>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </>
    );
};

export default Banner;