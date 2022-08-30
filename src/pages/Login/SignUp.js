import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Navbar/Header';

const SignUp = () => {
    return (
        <div>
            <Header type="list"></Header>
            <div className="grid justify-center mt-[100px]">
                <div class="card w-96 bg-base-100 shadow-xl ">
                    <h1 className="text-center text-2xl text-primary font-bold">Please create an account</h1>
                    <div class="card-body">
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text font-bold">Name</span>
                            </label>
                            <input type="text" placeholder="Type Name" class="input input-bordered w-full max-w-xs" required />
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text font-bold">Email</span>
                            </label>
                            <input type="email" placeholder="Type Email" class="input input-bordered w-full max-w-xs" required />
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text font-bold">Password</span>
                            </label>
                            <input type="password" placeholder="Type Password" class="input input-bordered w-full max-w-xs" required />
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text font-bold">Confirm password</span>
                            </label>
                            <input type="password" placeholder="Confirm password" class="input input-bordered w-full max-w-xs" required />
                        </div>
                        <button class="btn btn-active btn-primary mt-5">Sign Up</button>
                        <p>Already have an account? <Link className='text-primary' to="/login">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;