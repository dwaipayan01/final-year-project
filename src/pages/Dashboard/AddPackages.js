import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddPackages = () => {
    
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
            const info={
                picture:picture,
                name:data.name,
                price:data.price,
                review:data.review,
                pacage:data.pacage,
                location:data.location



            }
            fetch("http://localhost:5000/data",{
                method:"POST",
                headers:{
                    authorization:`Bearer ${localStorage.getItem("accessToken")}`,
                    "content-type":"application/json"
                },
                body:JSON.stringify(info)
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.acknowledged===true){
                    toast.success("Successfully added a packages");
                }
                
                console.log(data);
            })
            }
            console.log(result);
        })
        reset();

        

    }
    return (     
            <div className="flex h-screen justify-center">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-3xl font-bold">Add a package</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Picture</span>

                            </label>
                            <input
                                type="file"
                                className="input input-bordered w-full max-w-xs"
                                {...register("picture", {
                                    
                                     
                                })}

                            />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>

                            </label>
                            <input
                                type="text" placeholder="Type Name"
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
                        <div className="form-control w-full max-w-xs">
                        <label className="label">
                                <span className="label-text">Price</span>

                            </label>
                            <input
                                type="number" placeholder="Type price"
                                className="input input-bordered w-full max-w-xs"
                                {...register("price", {
                                    
                                     
                                })}
                              
                            />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Review</span>

                            </label>
                            <input
                                type="review" placeholder="Type review"
                                className="input input-bordered w-full max-w-xs"
                                {...register("review", {
                                    
                                })}

                            />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Packages</span>

                            </label>
                            <input
                                type="pacage" placeholder="Type packages"
                                className="input input-bordered w-full max-w-xs"
                                {...register("pacage", {
                                    
                                })}

                            />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Location</span>

                            </label>
                            <input
                                type="text" placeholder="Type location"
                                className="input input-bordered w-full max-w-xs"
                                {...register("location", {
                                    
                                })}

                            />

                        </div>




                     
                        <input className="btn w-full max-w-xs mt-5" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddPackages;