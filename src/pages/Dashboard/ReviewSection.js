import React from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

const ReviewSection = () => {
    const handleReview=(event)=>{
        event.preventDefault();
        const review={
            name:event.target.name.value,
            email:event.target.email.value,
            review:event.target.area.value
        }
        fetch('http://localhost:5000/review',{
            method: 'POST',
            body: JSON.stringify(review),
      headers: {
        "authorization":`Bearer ${localStorage.getItem("accessToken")}`,
        'Content-type': 'application/json'
      },
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.success){
                toast("Your information has been recorded.Thank you");
            }
            
        })
        event.target.reset();
    }
    const [user, loading, error] = useAuthState(auth);
    return (
        <div className=' mt-[70px] grid justify-center'>
                <h1 className="text-center text-2xl font-bold">Add review</h1>
                <div class="card w-96 bg-base-100 shadow-xl mb-10">
                    <div class="card-body">
                        <div className='grid grid-cols-1 justify-items-center gap-5 '>
                            <form onSubmit={handleReview}>
                            <input
                                type='email'
                                name="email"
                                disabled
                                value={user?.email}
                                placeholder='Email Address'
                                className='input w-full max-w-md border-orange-600 '
                                
                            />
                            <input
                                type='text'
                                name="name"
                                disabled
                                value={user?.displayName}
                                placeholder='name'
                                className='input w-full max-w-md border-orange-600 mt-3'
                                
                            />
                            <label class="label">
                                <span class="label-text mt-2  font-bold">Add review</span>
                            </label>
                            <textarea
                                
                                className='textarea w-full max-w-md border-orange-600 mt-3'
                                name="review"
                                placeholder='Your review'
                                rows={6}
                                
                            ></textarea>
                            <button  class="btn btn-warning hover:btn-primary mt-3 ml-[30px]">Submit</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
    );
};

export default ReviewSection;