import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';



const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
  const onSubmit = data => {
    console.log(data);

    axios.post('http://localhost:4000/review', data)
    .then(res => {
      if(res.data.insertedId){
        alert('added successfully');
        reset();
      }
    })
  };
    return (
        <div className="add-service">
           <h1>Review Section</h1> 
           <form onSubmit={handleSubmit(onSubmit)} >
      <input defaultValue={user.displayName} {...register("name", { required: true })}/>
      <input defaultValue={user. photoURL}  {...register("photoURL", { required: true })}/>
      <textarea {...register("reviewText")}  placeholder="Your Review"/>
      <input type="number" {...register("reviewNumber")} placeholder="review star"/>

      
      <input type="submit" />
    </form>
        </div>
    );
};

export default Review;