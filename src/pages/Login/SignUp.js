import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Header from '../Navbar/Header';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const SignUp = () => {
    const [error, setError] = useState("");
    const navigate=useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error1,
      ] = useCreateUserWithEmailAndPassword(auth);
      if(user){
        navigate("/home");
      }
    const handleSubmit=event=>{
        event.preventDefault();
        const name=event.target.name.value;
        const email=event.target.email.value;
        const password=event.target.password.value;
        const confirmPassword=event.target.confirmPassword.value;
        if(password!==confirmPassword){
            setError("Your password did not match");
            return;
        }
        if (password.length < 7) {
            setError("Password must be seven chareacter");
        }
        createUserWithEmailAndPassword(email,password);
    }
    return (
        <div>
            <Header type="list"></Header>
            <div className="grid justify-center mt-[100px]">
                <div class="card w-96 bg-base-100 shadow-xl ">
                    <h1 className="text-center text-2xl text-primary font-bold">Please create an account</h1>
                    <div class="card-body">
                        <form onSubmit={handleSubmit}>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text font-bold">Name</span>
                            </label>
                            <input type="text" placeholder="Type Name" name="name" class="input input-bordered w-full max-w-xs" required />
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text font-bold">Email</span>
                            </label>
                            <input type="email" placeholder="Type Email" name="email" class="input input-bordered w-full max-w-xs" required />
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text font-bold">Password</span>
                            </label>
                            <input type="password" placeholder="Type Password" name="password" class="input input-bordered w-full max-w-xs" required />
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text font-bold">Confirm password</span>
                            </label>
                            <input type="password" placeholder="Confirm password" name="confirmPassword" class="input input-bordered w-full max-w-xs" required />
                        </div>
                        <p className="text-red-500">{error}</p>
                        <button class="btn btn-active btn-primary mt-5">Sign Up</button>
                        </form>
                        <p>Already have an account? <Link className='text-primary' to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;