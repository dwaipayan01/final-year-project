import { format } from 'date-fns';
import React from 'react';
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import { useLocation } from "react-router-dom";
import Header from '../Navbar/Header';

const Hotel = () => {
    const location = useLocation();
    const [destination, setDestination] = useState(location.state?.destination);
    const [date, setDate] = useState(location.state?.date);
    const [openDate, setOpenDate] = useState(false);
    const [option, setOption] = useState(location.state?.option);
    return (
        <div>
            <Header type="list"></Header>
            <div style={{ backgroundColor: "#febb02" }} class="card  w-96  shadow-xl mt-[50px] lg:ml-[100px]">
                <div class="card-body">
                    <h2 class="card-title font-bold">Search</h2>
                    <label >Destination</label>
                    <input className='w-64 p-2' type="text" />
                    <label>Check-in date</label>
                    <span onClick={() => setOpenDate(!openDate)} className='border border-inherit w-64 p-2 bg-white cursor-pointer'>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                    {openDate && <DateRange onChange={item => setDate([])}
                        minDate={new Date()}
                        ranges={date}>
                    </ DateRange>}
                    <span className="font-bold">Options</span>
                    <div className='flex justify-between'>
                        <span>Max price <small>per nigth</small></span>
                        <input className='w-20' type="text" />
                    </div>
                    <div className='flex justify-between'>
                        <span>Adult</span>
                        <input className='w-20' min={1} type="number" placeholder={option.adult} />
                    </div>
                    <div className='flex justify-between'>
                        <span>Children</span>
                        <input className='w-20' min={0} type="number" placeholder={option.children} />
                    </div>
                    <div className='flex justify-between'>
                        <span>Room</span>
                        <input className='w-20' min={1} type="number" placeholder={option.room} />
                    </div>
                    <div class="card-actions justify-start">
                        <button class="btn btn-primary">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hotel;