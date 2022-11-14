import React from 'react';
import { useState } from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from './Loading';

const RequiredAuth = ({ children }) => {
    const [sendEmailVerification, sending, error1] = useSendEmailVerification(auth);
    const [user, loading, error] = useAuthState(auth);
    const [email,setEmail]=useState();
    const location=useLocation();
    if(loading){
        return <Loading></Loading>
    }
    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    if(user.providerData[0]?.providerId ==='password' && !user.emailVerified){
        return <div className='ml-[500px] mt-[100px]'>
            <h3 className='text-red-500 text-3xl font-bold'>Your email is not verified</h3>
            <h3 className='text-green-500 text-2xl font-bold mt-2'>Please verify your email</h3>
            <button className='btn btn-success mt-2'
        onClick={async () => {
          await sendEmailVerification();
          toast('Your verification email has been sent');
          setEmail({});
        }}
        
      >
        Verify email
      </button>
        </div>
    }
    
    return children;
};

export default RequiredAuth;