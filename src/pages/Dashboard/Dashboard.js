import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content text-center mt-5">
    <h1 className="text-3xl text-primary font-bold">Dashboard</h1>
      <Outlet></Outlet>
    
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
      
      <li><Link to="/dashboard">My Packages</Link></li>
      <li><Link to="/dashboard/hotels">My hotels</Link></li>
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;