import React, { useEffect, useState } from 'react';

const MyOrder = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:4000/users`)
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);

    const handleDelete = id => {
        const url = `http://localhost:4000/users/${id}`
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
                alert('deleted')
                const remaining = services.filter(service => service._id !== id);
                setServices(remaining);
            }
           
        })
    }
    return (
        <div>
            <h1 className="text-warning">All Order is here</h1>
            {
                services.map(service => <div className="my-5 bg-light">
                    key={service._id}
                     <h3>{service.name}</h3>
                     <p>{service.email}</p>
                     <p>{service.productName}</p>
                     <p>{service.phoneNumber}</p>
                     <p>{service.cardNumber}</p>
                     
                    <button className="bg-info" onClick={() => handleDelete(service._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default MyOrder;