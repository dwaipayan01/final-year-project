import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Header from '../Navbar/Header';
import { ToastContainer, toast } from 'react-toastify';
import SocialLogin from './SocialLogin';

const Login = () => {
    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(
        auth
      );
    const navigate=useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [email, setEmail] = useState('');
      if(user){
        navigate("/home");
      }
    const handleLogin=event=>{
        event.preventDefault();
        const email=event.target.email.value;
        const password=event.target.password.value;
        signInWithEmailAndPassword(email,password);

    }
    const handleEmail=event=>{
        setEmail(event.target.value);
    }
    const resetPassword=async ()=>{
        await sendPasswordResetEmail(email);
        if(email){
            toast("Password reset Email has been sent");
        }
        else{
            toast("Please provide a valid email");
        }
    }
    return (
        <div>
            <Header type="list"></Header>
            <div className="grid justify-center mt-[100px]">
                <div class="card w-96 bg-base-100 shadow-xl ">
                    <h1 className="text-center text-2xl text-primary font-bold">Please Login</h1>
                    <div class="card-body">
                        <form onSubmit={handleLogin}>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text font-bold">Email</span>
                            </label>
                            <input type="email" onBlur={handleEmail} placeholder="Type Email" name="email" class="input input-bordered w-full max-w-xs" required />
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text font-bold">Password</span>
                            </label>
                            <input type="password" placeholder="Type Password" name="password" class="input input-bordered w-full max-w-xs" required />
                        </div>
                        <p className="text-red-500">{error?.message}</p>
                        <button class="btn btn-active btn-primary mt-5">Sign Up</button>
                        </form>
                        <p>Forgot Password ?<Link onClick={resetPassword} className='text-primary' to="/login"> Reset Password</Link></p>
                        <p>New to this website ? <Link className='text-primary' to="/signup">Sign up</Link></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;