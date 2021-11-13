import React, { useEffect, useState } from 'react';
import Reviewss from '../Reviewss/Reviewss';


const Reviews = () => {
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:4000/review')
        .then(res => res.json())
        .then(data => setProducts(data));

    }, [])
    return (
        <div id="packages">
            <h3 className="mt-5">Our Happy Coustomer <span className="color">Reviews</span> </h3>
           <div className="service-container">
            { 
            products.map(product =><Reviewss
                key = {product.id}
                product = {product}
            ></Reviewss>)
             }
             </div>
            
            
        </div>
    );
};

export default Reviews;