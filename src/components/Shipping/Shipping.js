import React from 'react';
import { useForm } from 'react-hook-form';
import"./Shipping.css"
import useAuth from './../../hooks/useAuth';
const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user} = useAuth()
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div>
           <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
     
      <input defaultValue={user.displayName} {...register("name")} />
      
      <input defaultValue={user.email} {...register("email", { required: true })} />
      <input defaultValue="" placeholder="Address" {...register("address")} />
      <input defaultValue="" placeholder="Phone number" {...register("phone")} />
      <input defaultValue="" placeholder="Post code"{...register("post code")} />
      {errors.email && <span className="error">This field is required</span>}
      
      <input type="submit" />
    </form>
        </div>
    );
};

export default Shipping;