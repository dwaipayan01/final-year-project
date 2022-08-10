import React from 'react';
import { MdOutlineHotel } from 'react-icons/md';
import { MdOutlineFlightLand } from 'react-icons/md';
import { AiFillCar } from 'react-icons/ai';
import { MdAttractions } from 'react-icons/md';
import { FaTaxi } from 'react-icons/fa';
import { BiBed } from 'react-icons/bi';
import { FaCalendarAlt } from 'react-icons/fa';
import { GoPerson } from 'react-icons/go';
import "./Header.css";


const Header = () => {
    return (
        <div style={{ backgroundColor: "#003580" }} className="header" >
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
                <button class="btn btn-primary mt-5 mb-[80px]">Register</button>

                <div className="headerSearch">
                    <div className="headerSerachItem">
                        <p className='headerIcon'><BiBed></BiBed></p>
                        <input type="text" className="headerSearchInput" name="place" placeholder='type where are you going' id="" />
                    </div>
                    <div className="headerSerachItem">
                        <p className='headerIcon'><FaCalendarAlt></FaCalendarAlt></p>
                        <span className="headerSearchText">Date to date</span>
                    </div>
                    <div className="headerSerachItem">
                        <p className='headerIcon'><GoPerson></GoPerson></p>
                        <span className="headerSearchText">2 Adults 2 children 1 room</span>
                    </div>
                    <button className="headerBtn"> Search</button>
                </div>

            </div>




        </div >
    );
};

export default Header;