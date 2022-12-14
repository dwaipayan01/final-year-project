import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const UpdateModal = ({updatePackage,refetch,setUpdatePackage}) => {
    const {_id,name,price,review,location,pacage}=updatePackage;
    const { register, formState: { errors }, handleSubmit ,reset} = useForm();
    const imageStorageKey="d910a3fa5828979c28099e2024047808";
    const onSubmit = async data => {
        const image=data.picture[0];
        const formData = new FormData();
        formData.append('image', image)
        const url=`https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url,{
            method:"POST",
            body:formData
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.success){
                const picture=result.data.url;
            const updatedUser={
                picture:picture,
                name:data.name,
                price:data.price,
                review:data.review,
                pacage:data.pacage,
                location:data.location



            }
            fetch(`http://localhost:5000/package/${_id}`,{
                method:"PUT",
                headers:{
                    authorization:`Bearer ${localStorage.getItem("accessToken")}`,
                    "content-type":"application/json"
                },
                body:JSON.stringify(updatedUser)
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.acknowledged===true){
                    toast.success("Successfully updated this packages");
                    setUpdatePackage(null);
                    refetch();
                }
                
                console.log(data);
            })
            }
        })
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal-one" className="modal-toggle" />
             <div className="modal modal-bottom sm:modal-middle">
             <div className="modal-box">
             <label htmlFor="booking-modal-one" className="btn btn-sm btn-circle absolute right-2 top-2">???</label>
             <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-xs mx-auto">
                            <label className="label">
                                <span className="label-text font-bold">Picture</span>

                            </label>
                            <input
                                type="file"
                                className="input input-bordered w-full max-w-xs"
                                {...register("picture", {
                                    
                                     
                                })}

                            />

                        </div>
                        <div className="form-control w-full max-w-xs mx-auto">
                            <label className="label">
                                <span className="label-text font-bold">Name</span>

                            </label>
                            <input
                                type="text" placeholder="Type Name"
                                defaultValue={name}
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name is required"
                                    },

                                })}

                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                            </label>

                        </div>
                        <div className="form-control w-full max-w-xs mx-auto">
                        <label className="label">
                                <span className="label-text font-bold">Price</span>

                            </label>
                            <input
                                type="number" placeholder="Type price"
                                defaultValue={price}
                                className="input input-bordered w-full max-w-xs"
                                {...register("price", {
                                    
                                     
                                })}
                              
                            />

                        </div>
                        <div className="form-control w-full max-w-xs mx-auto">
                            <label className="label">
                                <span className="label-text font-bold">Review</span>

                            </label>
                            <input
                                type="review" placeholder="Type review" defaultValue={review}
                                className="input input-bordered w-full max-w-xs"
                                {...register("review", {
                                    
                                })}

                            />

                        </div>
                        <div className="form-control w-full max-w-xs mx-auto">
                            <label className="label">
                                <span className="label-text font-bold">Packages</span>

                            </label>
                            <input
                                type="pacage" placeholder="Type packages" defaultValue={pacage}
                                className="input input-bordered w-full max-w-xs"
                                {...register("pacage", {
                                    
                                })}

                            />

                        </div>
                        <div className="form-control w-full max-w-xs mx-auto">
                            <label className="label">
                                <span className="label-text font-bold">Location</span>

                            </label>
                            <input
                                type="text" placeholder="Type location" defaultValue={location}
                                className="input input-bordered w-full max-w-xs"
                                {...register("location", {
                                    
                                })}

                            />

                        </div>




                     
                        <input className="btn w-full max-w-xs mt-5 mb-5" type="submit" />
                    </form>
             </div>
           </div>
        </div>
    );
};

export default UpdateModal;