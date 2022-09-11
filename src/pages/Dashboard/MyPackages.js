import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyPackages = () => {
    const [appointments,setAppointments]=useState("");
    const [user, loading, error] = useAuthState(auth);
    useEffect(()=>{
        if(user){
            fetch(`http://localhost:5000/booking?email=${user.email}`)
        .then(res =>res.json())
        .then(data=>setAppointments(data))
        }
    },[user]);
    return (
        <div>
            <h1>My all packages :{appointments.length}</h1>
            <div className="overflow-x-auto">
  <table className="table w-full mt-5">
    
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Date</th>
        <th>Package Name</th>
      </tr>
    </thead>
    <tbody>
        
        {
          Array.isArray(appointments) ? appointments.map((a,index) => <tr>
                <th>{index+1}</th>
                <td>{a.name}</td>
                <td>{a.date}</td>
                <td>{a.package}</td>
              </tr>)
              :
              null
        }
     
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyPackages;