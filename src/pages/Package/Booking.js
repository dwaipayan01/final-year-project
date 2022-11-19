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
    const [error, setError] = useState("");
    
    // const [packages, setPackages] = useData(id);
    const {data:packages,setPackages,isLoading,refetch}=useQuery("available",()=>fetch(`http://localhost:5000/product/${id}`)
    
    .then(res => res.json()))
    const [value,setValue]=useState(packages?.price);
    const [startDate, setStartDate] = useState(new Date());
    const handleChange=(event)=>{
        const peoples=event.target.value;
        if(peoples.length<1 || peoples.length>12){
            setError("You can not come more than 12 people");
            return;
        }
            console.log(peoples);
            const newPrice=parseFloat((packages.price/peoples).toFixed(2));
            const newAmount=packages.price-newPrice;
            setValue(newAmount);
        
            
        
        


    }
    if(isLoading){
        return <Loading></Loading>
    }
    
    return (
        <div>
            <div style={{ backgroundColor: "#48bb78" }} class="card w-60  ml-[30px] mt-[30px] shadow-xl sticky top-0">
                <div class="card-body ">

                    <h2 class="card-title ml-5 text-white-500">Price:${value}</h2>

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

                        <input type="number"  name="people" onChange={handleChange}  defaultValue="12" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <p className="text-red-500">{error}</p>
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