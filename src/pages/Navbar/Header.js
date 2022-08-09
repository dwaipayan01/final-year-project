import React from 'react';
import { MdOutlineHotel } from 'react-icons/md';
import { MdOutlineFlightLand } from 'react-icons/md';
import { AiFillCar } from 'react-icons/ai';
import { MdAttractions } from 'react-icons/md';
import { FaTaxi } from 'react-icons/fa';

const Header = () => {
    return (
        <div style={{ backgroundColor: "#003580" }} >
            <ul class="menu menu-vertical lg:menu-horizontal text-white ml-[90px] ">
                <li className='hover:border border-solid border-white rounded-3xl'><a><p className='text-2xl '><MdOutlineHotel></MdOutlineHotel></p>Hotels</a></li>
                <li className='hover:border border-solid border-white rounded-3xl'><a><p className='text-2xl ml-5'><MdOutlineFlightLand></MdOutlineFlightLand></p>Flights</a></li>
                <li className='hover:border border-solid border-white rounded-3xl'><a><p className='text-2xl ml-5'><AiFillCar></AiFillCar></p>Car rentals</a></li>
                <li className='hover:border border-solid border-white rounded-3xl'><a><p className='text-2xl ml-5'><MdAttractions></MdAttractions></p>Attractions</a></li>
                <li className='hover:border border-solid border-white rounded-3xl'><a><p className='text-2xl ml-5'><FaTaxi></FaTaxi></p>Airport taxis</a></li>
            </ul>
            <div className='mt-[60px] ml-[90px]'>
                <h1 className="text-white text-5xl  font-bold">Find your next stay</h1>
                <p className='text-white text-2xl mt-2'>Search low prices on hotels, homes and much more...</p>
                <button class="btn btn-primary mt-5 mb-5">Register</button>
            </div>
        </div >
    );
};

export default Header;