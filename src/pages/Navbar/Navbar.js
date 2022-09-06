import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import auth from '../../firebase.init';


const Navbar = () => {
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);
    const handleSignout=()=>{
        signOut(auth);
    } 
    return (
        <div style={{ backgroundColor: "#003580" }} class="navbar h-16 ">
            <div class="navbar-start px-12">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <button class="btn mb-5">Login</button>
                        <button class="btn">Register</button>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl text-white px-12">Home</Link>
            </div>
            <div class="navbar-center hidden lg:flex ms-[100px]">
                {user ? <ul>
                        <button class="btn bg-white text-black ml-5 mr-5">Contact us</button>
                        <button onClick={handleSignout} class="btn bg-white text-black ml-5 mr-5">Sign Out</button>
                    </ul>
                    :
                    <ul class="menu menu-horizontal p-0 text-white">
                    <button class="btn bg-white text-black ml-5 mr-5">Contact us</button>
                     <button onClick={() => {
                        navigate("/login")
                    }} class="btn bg-white text-black mr-5">Login</button>
                    <button onClick={() => {
                        navigate("/signup")
                    }} class="btn bg-white text-black">Register</button>
                
                
                </ul>}
            </div>

        </div>
    );
};

export default Navbar;