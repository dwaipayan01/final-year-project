import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useData from '../../hooks/useData';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import BookingModal from './BookingModal';
import { useQuery } from 'react-query';
import Loading from '../Login/Loading';


const Booking = () => {
    const { id } = useParams();
    // const [packages, setPackages] = useData(id);
    const {data:packages,setPackages,isLoading,refetch}=useQuery("available",()=>fetch(`http://localhost:5000/product/${id}`)
    .then(res => res.json()))
    const [startDate, setStartDate] = useState(new Date());
    if(isLoading){
        return <Loading></Loading>
    }
    
    return (
        <div>
            <div style={{ backgroundColor: "#48bb78" }} class="card w-60  ml-[30px] mt-[30px] shadow-xl sticky top-0">
                <div class="card-body ">

                    <h2 class="card-title ml-5 text-white-500">Price:${packages?.price}</h2>

                    <div className="divider"></div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Date</span>
                        </label>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold">Maximum People</span>
                        </label>
                        <input type="number" disabled defaultValue="12" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div class="card-actions justify-center">
                        <label htmlFor="booking-modal"
                        // onClick={()=>setPackages(packages)} 
                         class="btn btn-green" 
                         className="btn modal-button">Book now</label>
                    </div>
                </div>
            </div>
        {packages && <BookingModal setPackages={setPackages} refetch={refetch}  startDate={startDate} packages={packages}></BookingModal>}
        </div>
    );
};

export default Booking;