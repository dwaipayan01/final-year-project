import React from 'react';
import { toast } from 'react-toastify';

const DeleteRow = ({product,index,refetch,setDeletePackage}) => {
    const {name,picture,price,_id}=product;
    
    return (
        <tr>
        <th>{index+1}</th>
        <td><div className="avatar">
  <div className="w-24 rounded-xl">
    <img src={picture} alt=""/>
  </div>
</div></td>
        <td>{name}</td>
        <td>${price}</td>
        <td>
        <label onClick={()=>setDeletePackage(product)} htmlFor="my-modal-6" className="btn btn-xs">Delete</label>
          
          </td>
      </tr>
    );
};

export default DeleteRow;