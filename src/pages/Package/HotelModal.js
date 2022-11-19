import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const HotelModal = ({packages,setPackages}) => {
    const [user, loading, error] = useAuthState(auth);
    const handleBooking=event=>{
        event.preventDefault();
        const hotels={
            package:packages.name,
            name:user?.displayName,
            email:user?.email,
            room:event.target.room.value,
            people:event.target.people.value
        }
        fetch('http://localhost:5000/hotelBooking', {
                method: 'POST',
                
          headers: {
            authorization:`Bearer ${localStorage.getItem("accessToken")}`,
            'Content-type': 'application/json',
          },
          body:JSON.stringify(hotels),
        })
          .then((response) => response.json())
          .then((data) => {
            if(data.success){
                toast.success(`Your hotel booking is confirm.`);
            }
            
            
        
        });
    }
    return (
        <div>
            <input type="checkbox" id="hotel-modal" className="modal-toggle" />
             <div className="modal modal-bottom sm:modal-middle">
             <div className="modal-box">
             <label htmlFor="hotel-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
             <h3 className="font-bold text-lg font-bold text-green-500">Booking for: {packages.name}</h3>
             <form onSubmit={handleBooking}>
                <div className="text-center">
             <input type="text" name="name" value={user?.displayName} disabled className="input w-full max-w-xs border rounded border-red-500 mt-5" />
             <input type="text" name="email" value={user?.email} disabled className="input w-full max-w-xs border rounded border-red-500 mt-5" />
             <input type="number"   name="room" placeholder="Type room number" className="input w-full max-w-xs border rounded border-red-500 mt-5" required/>
             <input type="number" name="people" placeholder="Type people" className="input w-full max-w-xs border rounded border-red-500 mt-5" required/>
             <button className="btn btn-primary w-full max-w-xs mt-5">Submit</button>
                </div>
             </form>
             </div>
           </div>
        </div>
    );
};

export default HotelModal;