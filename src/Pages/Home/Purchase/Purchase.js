import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import './Purchase.css'

const Purchase = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
  const onSubmit = data => {
    console.log(data);

    axios.post('http://localhost:4000/users', data)
    .then(res => {
      if(res.data.insertedId){
        alert('added successfully');
        reset();
      }
    })
  };
    return (
        <div className="add-service">
           <h1>Order your purchase</h1> 
           <form onSubmit={handleSubmit(onSubmit)} >
      <input defaultValue={user.displayName} placeholder=" Name" {...register("name", { required: true })}/>
      <input defaultValue={user.email} placeholder="Email" {...register("email", { required: true })}/>
      <input {...register("delivery address")} placeholder="delivery address"/>
      <input {...register("product name")} placeholder="product name"/>
      <input type="phone number" {...register("purchase")} placeholder="phone number"/>
      <input type="card number" {...register("purchase")} placeholder="card number"/>

      
      <input type="submit" />
    </form>
        </div>
    );
};

export default Purchase;