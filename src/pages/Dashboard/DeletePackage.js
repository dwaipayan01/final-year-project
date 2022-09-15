import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Login/Loading';
import DeleteRow from './DeleteRow';

const DeletePackage = () => {
    const {data:packages,isLoading,refetch}=useQuery('package',()=>fetch("http://localhost:5000/product").then(res=>res.json()))
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h1>Delete Packages</h1>
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
        packages.map((product,index)=><DeleteRow product={product} refetch={refetch} key={product._id} index={index}>

        </DeleteRow>)
          
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default DeletePackage;