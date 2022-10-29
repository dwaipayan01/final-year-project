import { signOut } from 'firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyPackages = () => {
    const [appointments,setAppointments]=useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate=useNavigate();
    useEffect(()=>{
        if(user){
            fetch(`http://localhost:5000/booking?email=${user.email}`,{
              method:"GET",
              headers:{
                "authorization":`Bearer ${localStorage.getItem("accessToken")}`
              }
            })
        .then(res =>{
          console.log('res',res);
          if(res.status===401 || res.status===403){
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/home");

          }
         return res.json()})
        .then(data=>{
          setAppointments(data)
        })
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
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
        
        {
          Array.isArray(appointments) ? appointments.map((a,index) => <tr>
                <th>{index+1}</th>
                <td>{a.name}</td>
                <td>{a.date}</td>
                <td>{a.package}</td>
                <td>{(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className="btn btn-xs btn-success">Pay</button></Link>}
                {(a.price && a.paid) && <span className="btn btn-success">Paid</span>}
                </td>
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