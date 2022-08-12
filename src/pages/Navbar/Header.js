import React, { useState } from 'react';
import { MdOutlineHotel } from 'react-icons/md';
import { MdOutlineFlightLand } from 'react-icons/md';
import { AiFillCar } from 'react-icons/ai';
import { MdAttractions } from 'react-icons/md';
import { FaTaxi } from 'react-icons/fa';
import { BiBed } from 'react-icons/bi';
import { FaCalendarAlt } from 'react-icons/fa';
import { GoPerson } from 'react-icons/go';
import "./Header.css";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';


const Header = ({ type }) => {
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openOption, setOpenOption] = useState(false);
    const [option, setOption] = useState({
        adult: 1,
        children: 0,
        room: 1
    })
    const handleOption = (name, operation) => {
        setOption(prev => {
            return {
                ...prev, [name]: operation === "i" ? option[name] + 1 : option[name] - 1
            }
        })
    }
    return (
        <div style={{ backgroundColor: "#003580" }} className="header" >
            <ul className={type === "list" ? "mb-5 menu menu-vertical lg:menu-horizontal text-white ml-[90px]" : "menu menu-vertical lg:menu-horizontal text-white ml-[90px] "}>
                <li className='hover:border border-solid border-white rounded-3xl'><a><p className='text-2xl '><MdOutlineHotel></MdOutlineHotel></p>Hotels</a></li>
                <li className='hover:border border-solid border-white rounded-3xl'><a><p className='text-2xl ml-5'><MdOutlineFlightLand></MdOutlineFlightLand></p>Flights</a></li>
                <li className='hover:border border-solid border-white rounded-3xl'><a><p className='text-2xl ml-5'><AiFillCar></AiFillCar></p>Car rentals</a></li>
                <li className='hover:border border-solid border-white rounded-3xl'><a><p className='text-2xl ml-5'><MdAttractions></MdAttractions></p>Attractions</a></li>
                <li className='hover:border border-solid border-white rounded-3xl'><a><p className='text-2xl ml-5'><FaTaxi></FaTaxi></p>Airport taxis</a></li>
            </ul>
            {type !== "list" &&

                <><div className='mt-[60px] ml-[90px]'>
                    <h1 className="text-white text-5xl  font-bold">Find your next stay</h1>
                    <p className='text-white text-2xl mt-2'>Search low prices on hotels, homes and much more...</p>
                    <button class="btn btn-primary mt-5 mb-[80px]">Register</button>

                    <div className="headerSearch">
                        <div className="headerSerachItem">
                            <p className='headerIcon'><BiBed></BiBed></p>
                            <input type="text" className="headerSearchInput" name="place" placeholder='type where are you going' id="" />
                        </div>
                        <div className="headerSerachItem">
                            <p onClick={() => setOpenDate(!openDate)} className='headerIcon'><FaCalendarAlt></FaCalendarAlt></p>
                            <span onClick={() => setOpenDate(!openDate)} className="text-gray-500">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                            {openDate && <DateRange
                                editableDateInputs={true}
                                onChange={item => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className='date'
                            />}
                        </div>
                        <div className="headerSerachItem">
                            <p onClick={() => setOpenOption(!openOption)} className='headerIcon'><GoPerson></GoPerson></p>
                            <span onClick={() => setOpenOption(!openOption)} className="text-gray-500">{`${option.adult} adult . ${option.children} children . ${option.room} room`}</span>
                            {openOption && <div className="option">
                                <div className="optionItem">
                                    <span className='optionItem '>Adult</span>
                                    <div className='optionCounter'>
                                        <button className="optionCounterButton " onClick={() => handleOption("adult", "d")} disabled={option.adult <= 1}>-</button>
                                        <span className="optionCounterNumber">{option.adult}</span>
                                        <button className="optionCounterButton " onClick={() => handleOption("adult", "i")}>+</button>
                                    </div>
                                </div>
                                <div className="optionItem">
                                    <span className='optionItem '>Children</span>
                                    <div className='optionCounter'>
                                        <button className="optionCounterButton " onClick={() => handleOption("children", "d")} disabled={option.children <= 0}>-</button>
                                        <span className="optionCounterNumber">{option.children}</span>
                                        <button className="optionCounterButton " onClick={() => handleOption("children", "i")}>+</button>
                                    </div>
                                </div>
                                <div className="optionItem">
                                    <span className='optionItem '>Room</span>
                                    <div className='optionCounter'>
                                        <button className="optionCounterButton " onClick={() => handleOption("room", "d")} disabled={option.room <= 1}>-</button>
                                        <span className="optionCounterNumber">{option.room}</span>
                                        <button className="optionCounterButton " onClick={() => handleOption("room", "i")}>+</button>
                                    </div>
                                </div>
                            </div>}

                        </div>
                        <button className="headerBtn"> Search</button>

                    </div>

                </div> </>}




        </div >
    );
};

export default Header;