import React from 'react';


const Navbar = () => {
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
                <a class="btn btn-ghost normal-case text-xl text-white px-12">daisyUI</a>
            </div>
            <div class="navbar-center hidden lg:flex ms-[100px]">
                <ul class="menu menu-horizontal p-0 text-white">
                    <button class="btn mr-5">Login</button>
                    <button class="btn">Register</button>
                </ul>
            </div>

        </div>
    );
};

export default Navbar;