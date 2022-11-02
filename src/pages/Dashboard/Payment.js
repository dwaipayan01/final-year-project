import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Login/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51Ly9grBbWaV35n3c4pTiznXLrHtQptvBZrriUg0ISSygYKaRjvriahoK0fAwVOcFrjQtHhrhAlooeOFaTWPZUVGp00rFeNxkcv');
const Payment = () => {
    const {id}=useParams()
    const url=`http://localhost:5000/booking/${id}`
    const {data:appointment,isLoading}=useQuery(["booking",id],()=>fetch(url,{
        method:"GET",
        headers:{
          "authorization":`Bearer ${localStorage.getItem("accessToken")}`
        }
        }).then(res=>res.json()))
        if(isLoading){
            return <Loading></Loading>
        }
    return (
        <div className="ml-[300px]">
            
  <div className="card w-50 max-w-md bg-base-100 my-12 shadow-xl">
  <div className="card-body">
    <p className='text-success font-bold text-3xl'>Hello {appointment.name}</p>
    <h2 className="card-title">Please pay for :{appointment.package}</h2>
    <p>We will see you: <span className='text-red-500 font-bold'>{appointment.date}</span></p>
    <p>Please pay:<span className='text-red-500 font-bold'> ${appointment.price}</span></p>
    
  </div>
</div>
    <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
      <div className="card-body">
      <Elements stripe={stripePromise}>
      <CheckoutForm appointment={appointment}/>
    </Elements>
      </div>
    </div>
        </div>
    );
};

export default Payment;