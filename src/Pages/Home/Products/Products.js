import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:4000/services')
        .then(res => res.json())
        .then(data => setProducts(data));

    }, [])
    return (
        <div id="packages">
            <h3 className="mt-5"><span className="color">FEATURED</span> PRODUCTS</h3>
         
            <h6 className="mb-5 ">It is a long established fact that a reader will be distracted by the readable content page when looking at its layout.</h6>
            
            <div className="service-container">
            { 
            products.map(product =><Product
            key = {product.id}
            product = {product}
            
            ></Product>)
             }
            
            
            
            
           
             
              </div>
            
            
        </div>
    );
};

export default Products;