import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user,index,refetch}) => {
    const {email,role}=user
    const makeAdmin=()=>{
        fetch(`http://localhost:5000/user/admin/${email}`,{
          method:"PUT",
          headers:{
          authorization:`Bearer ${localStorage.getItem("accessToken")}`
        }
        })
        .then(res=>{
          if(res.status===403){
            toast.error("Unable to make an admin");
          }
          return res.json()
        
        })
        .then(data=>{
          if(data.modifiedCount>0){
            toast.success("Successfully an admin added");
          refetch();
          }
        })
      }
      const removeUser=()=>{
        fetch(`http://localhost:5000/user/${email}`,{
          method:"DELETE",
          headers:{
          authorization:`Bearer ${localStorage.getItem("accessToken")}`
        }
        })
        .then(res=>{
          if(res.status===403){
            toast.error("Unable to make an admin");
          }
          return res.json()
        
        })
        .then(data=>{
          console.log(data);
          const proceed=window.confirm("Are  you sure ?")
          if(data.deletedCount>0 && proceed){
          toast.success("User remove successfully complete");
          refetch();
          }
          else{
            toast("OK");
          }
        })
      }
    return (
            <tr>
                <th>{index+1}</th>
                <td>{email}</td>
                <td>{role !=='admin' ? <button onClick={makeAdmin}  className="btn btn-xs">Make admin</button>
                : 
                <button  className="btn btn-xs">Admin</button>
                }</td>
                <td><button onClick={removeUser} className="btn btn-xs">Remove user</button></td>
              </tr>
    );
};

export default UserRow;