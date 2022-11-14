import React from 'react';
import { toast } from 'react-toastify';

const DeleteModal = ({deletePackage,refetch,setDeletePackage}) => {
    const {name,_id}=deletePackage;
    const handleDelete=()=>{
        fetch(`http://localhost:5000/package/${_id}`,{
          method:'DELETE',
          headers:{
            "authorization":`Bearer ${localStorage.getItem("accessToken")}`
          }
        }) 
        .then(res=>res.json())
        .then(data=>{
          if(data.deletedCount){
            toast.success(`${name} is deleted`)
            setDeletePackage(null);
            refetch();
          }
        })
        
      }
    return (
        <div>

<input type="checkbox" id="my-modal-6" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg text-red-500">Are you sure you want to delete : {name}</h3>
    <div className="modal-action">
    <button onClick={handleDelete} className="btn btn-xs">Delete</button>
      <label htmlFor="my-modal-6" className="btn btn-xs">Cancel</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default DeleteModal;