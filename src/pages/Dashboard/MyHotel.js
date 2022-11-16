import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyHotel = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate=useNavigate();
    const profileInformation=(event)=>{
        event.preventDefault();
        navigate("/dashboard/profile");
    }
    return (
        <div>
            <h1 className='font-bold mb-5'>My Profile</h1>
            <div  className="hero min-h-screen w-4/5 mx-auto">
  <div className="hero-content flex-col lg:flex-row mt-[-400px]">
  
    <div>
    <div class="card-body mt-[100px]">
                        <form>
                        <div class="form-control w-full max-w-xs ">
                            <label class="label">
                                <span class="label-text  font-bold">Full Name</span>
                            </label>
                            <input type="email"  placeholder="Type Email" value={user?.displayName} name="email" disabled class="input input-bordered w-64 " required />
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text  font-bold">Email</span>
                            </label>
                            <input type="email" placeholder="Type Password" value={user.email} name="email" disabled class="input input-bordered w-64" required />
                        </div>
                        
                        <button onClick={profileInformation} className="btn btn-error mt-5">Edit Profile</button>
                        </form>
                    </div>
      
    </div>
  </div>
</div> 
        </div>
    );
};

export default MyHotel;