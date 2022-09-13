import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Login/Loading';
import UserRow from './UserRow';

const AllUser = () => {
    const {data:users,isLoading,refetch}=useQuery("users",()=>fetch("http://localhost:5000/user",{
      method:"GET",
      headers:{
        authorization:`Bearer ${localStorage.getItem("accessToken")}`
      }
    }).then(res=>res.json()));
    
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h1>All user:{users.length}</h1>
            <div className="overflow-x-auto">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
        {
            users.map((user,index)=> <UserRow user={user} refetch={refetch} index={index}></UserRow>)
        }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUser;