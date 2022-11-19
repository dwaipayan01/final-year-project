import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Login/Loading';

const ProfileInformation = () => {
    const [user, loading, error] = useAuthState(auth);
    const handleProfile=(event)=>{
        event.preventDefault();
        const updatedUser={
            name:event.target.name.value,
            email:event.target.email.value,
            address:event.target.address.value,
            number:event.target.number.value,
            gender:event.target.gender.value

        }
        fetch(`http://localhost:5000/profile/${user?.email}`,{
                method:"PUT",
                headers:{
                    authorization:`Bearer ${localStorage.getItem("accessToken")}`,
                    "content-type":"application/json"
                },
                body:JSON.stringify(updatedUser)
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.success){
                    toast.success("Successfully edited your profile");
                    }
                
                
            })
            event.target.reset();
        
    }
    return (
        <div>
            <h1 className='font-bold mb-5'>My Profile</h1>
            <div  className="hero min-h-screen w-4/5 mx-auto">
  <div className="hero-content flex-col lg:flex-row mt-[-240px]">
  
    <div>
    <div class="card-body mt-[100px]">
                        <form onSubmit={handleProfile}>
                        <div class="form-control w-full max-w-xs ">
                            <label class="label">
                                <span class="label-text  font-bold">Full Name</span>
                            </label>
                            <input type="text" name="name" disabled  placeholder="Type Email" defaultValue={user?.displayName}   class="input input-bordered w-64 " required />
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text  font-bold">Email</span>
                            </label>
                            <input type="email"   placeholder="Type Password" value={user.email} name="email" disabled class="input input-bordered w-64" required />
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text  font-bold">Address</span>
                            </label>
                            <input type="text"   placeholder="Type address"  name="address"  class="input input-bordered w-64" required />
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text  font-bold">Phone number</span>
                            </label>
                            <input type="text" placeholder="Type Phone number"  name="number" class="input input-bordered w-64" required />
                        </div>
                        <select name="gender" className="select select-bordered w-full mt-5 max-w-xs">
  <option disabled selected>gender</option>
  <option>Male</option>
  <option>Female</option>
</select>
                        
                        <button  className="btn btn-error mt-5">save</button>
                        </form>
                    </div>
      
    </div>
  </div>
</div> 
        </div>
    );
};

export default ProfileInformation;