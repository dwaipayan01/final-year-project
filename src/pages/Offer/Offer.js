import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Header from '../Navbar/Header';
import Footer from '../Footer/Footer';
import { BiTimeFive } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';


const Offer = () => {
    const navigate = useNavigate();
    const [offers, setOffers] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/product")
            .then(res => res.json())
            .then(data => setOffers(data));
    }, [])
    const handleClick = (id) => {
        navigate(`/offerDetail/${id}`)
    }

    return (
        <div>
            
            <h1 className=' text-center text-2xl font-bold mt-[100px]'>Best: Experiences</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-5 ml-[50px] mr-[50px] mb-[50px]">
                {
                    offers.map(offer => <div key={offer._id}>
                        <div onClick={() => handleClick(offer._id)} class="card lg:w-lg bg-base-100 shadow-xl cursor-pointer">
                            <figure><img className='transform transition-all hover:scale-125' src={offer.picture} alt="Shoes" /></figure>
                            <div class="card-body">
                                <h2 class="card-title text-2xl">{offer.name}</h2>
                                <p className="flex items-center"><div class="rating w-16 mr-5">
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                </div>
                                    <p className="text-gray-400">{offer.review}</p>

                                </p>
                                <div className='flex items-center'>
                                    <h1 className="text-gray-400"><BiTimeFive></BiTimeFive></h1>
                                    <p className="text-gray-400"> {offer.pacage}</p>

                                    <div>
                                        <p className="text-green-400 font-bold text-3xl">${offer.price}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Offer;