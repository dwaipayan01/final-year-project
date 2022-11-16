import React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Login/Loading';
import DeleteModal from './DeleteModal';
import DeleteRow from './DeleteRow';
import UpdateModal from './UpdateModal';

const DeletePackage = () => {
  const [deletePackage,setDeletePackage]=useState(null);
  const [updatePackage,setUpdatePackage]=useState(null);
    const {data:packages,isLoading,refetch}=useQuery('package',()=>fetch("http://localhost:5000/product").then(res=>res.json()))
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='font-bold mb-5'>All Packages</h1>
            <div className="overflow-x-auto">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      
      {
        packages.map((product,index)=><DeleteRow product={product} refetch={refetch} setUpdatePackage={setUpdatePackage} key={product._id} index={index} setDeletePackage={setDeletePackage}>

        </DeleteRow>)
          
      }
    </tbody>
  </table>
</div>
    {updatePackage && <UpdateModal updatePackage={updatePackage} refetch={refetch} setUpdatePackage={setUpdatePackage}></UpdateModal>}
     {deletePackage && <DeleteModal deletePackage={deletePackage} refetch={refetch} setDeletePackage={setDeletePackage}></DeleteModal>}
        </div>
    );
};

export default DeletePackage;