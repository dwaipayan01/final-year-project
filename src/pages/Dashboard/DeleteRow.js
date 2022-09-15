import React from 'react';

const DeleteRow = ({product,index,refetch}) => {
    const {name,picture,price}=product;
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
        <td><button className="btn btn-xs">Delete</button></td>
      </tr>
    );
};

export default DeleteRow;