import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const [admin]=useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content text-center mt-5">
    <h1 className="text-3xl  font-bold mb-5">Dashboard</h1>
      <Outlet></Outlet>
    
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
      {/* {
        !user && <><li><Link to="/dashboard/profile">Profile Information</Link></li></>
      } */}
      {!admin && <><li><Link to="/dashboard">My Packages</Link></li>
      <li><Link to="/dashboard/hotels">My Profile</Link></li>
      <li><Link to="/dashboard/review">Add Review</Link></li></>}
      {admin && <>
        <li><Link to="/dashboard/users">All users</Link></li>
        <li><Link to="/dashboard/addPackage">Add Packages</Link></li>
        <li><Link to="/dashboard/deletePackage">All Packages</Link></li>
      
      </>}
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;