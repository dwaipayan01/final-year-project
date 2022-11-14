import React from 'react';
import { useNavigate } from 'react-router-dom';
import picture from '../../images/5.jpg';

const Package = () => {
    const navigate = useNavigate();
    const handleOffers = () => {
        navigate("/offer");
    }
    return (
        <div className='mt-[-80px]'>
            <div className="mt-[150px] lg:ml-[90px] ml-[20px]">
                <h1 className='text-2xl font-bold'>Offers</h1>
                <p className="text-gray-400">Promotions, deals and special offers for you</p>
            </div>
            <div className='lg:ml-[90px] lg:mr-[90px]'>
                <div class="card lg:w-lg bg-base-100 shadow-xl">
                    <div class="card-body">
                        <div className='text-start'>
                            <div className="flex items-center ml-[60px]">
                                <img src={picture} class="max-w-sm w-40 rounded-lg shadow-2xl" alt="" />
                                <div className='px-5'>
                                    <h1 class="text-1xl font-bold">Save  more</h1>
                                    <p>Plan your dream trip with a Getaway Deal</p>
                                    <button onClick={handleOffers} class="btn btn-primary mt-5">Explore Packages</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Package;