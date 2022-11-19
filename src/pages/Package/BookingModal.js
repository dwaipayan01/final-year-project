import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import { format } from 'date-fns';

const BookingModal = ({packages,startDate,setPackages,refetch}) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState("");
    const [user, loading, error1] = useAuthState(auth);
    
    const handleBooking=(event)=>{
        event.preventDefault();
        const result=event.target.phoneNumber.value;
        
        const booking={
            date:event.target.date.value,
            name:event.target.name.value,
            email:event.target.email.value,
            phoneNumber:event.target.phoneNumber.value,
            address:event.target.address.value,
            tourName:packages.name,
            price:packages.price
        }
        if(result.length>11 || result.length<11){
            setError("Phone number must be 11 character");
            return;
        }
        else{
            fetch('http://localhost:5000/booking', {
                method: 'POST',
                body: JSON.stringify(booking),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
          .then((response) => response.json())
          .then((data) => {
            if(data.success){
                toast.success(`Your booking on ${packages.name} is taken at ${startDate}.Please confirm your booking by paying.`);
            }
            else{
                toast.error(`You can not book more than one booking in a day`);
            }
            refetch();
            setPackages(null);
            console.log(data)
        
        });
        }
       
        
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
             <div className="modal modal-bottom sm:modal-middle">
             <div className="modal-box">
             <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
             <h3 className="font-bold text-lg font-bold text-green-500">Booking for: {packages.name}</h3>
             <form onSubmit={handleBooking}>
                <div className="text-center">
                <input type="text" name="date" value={format(startDate, 'PP')} disabled className="input w-full max-w-xs border rounded border-red-500 mt-5" />
             <input type="text" name="name" value={user?.displayName} disabled className="input w-full max-w-xs border rounded border-red-500 mt-5" />
             <input type="text" name="email" value={user?.email} disabled className="input w-full max-w-xs border rounded border-red-500 mt-5" />
             <input type="text"   name="phoneNumber" placeholder="Type phone number" className="input w-full max-w-xs border rounded border-red-500 mt-5" required/>
             <p className="text-red-500">{error}</p>
             <input type="text" name="address" placeholder="Type address" className="input w-full max-w-xs border rounded border-red-500 mt-5" required/>
             <button className="btn btn-primary w-full max-w-xs mt-5">Submit</button>
                </div>
             </form>
             </div>
           </div>
        </div>
    );
};

export default BookingModal;