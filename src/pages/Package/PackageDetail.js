import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Navbar/Header';
import { GoLocation } from 'react-icons/go';
import { BiTime } from 'react-icons/bi';
import { ImLocation2 } from 'react-icons/im';
import { RiHandbagFill } from 'react-icons/ri';
import { BsPeopleFill } from 'react-icons/bs';
import Booking from './Booking';
import App from './PackagePicture';
import PackagePicture from './PackagePicture';
import useData from '../../hooks/useData';
import Footer from '../Footer/Footer';

const PackageDetail = () => {
    const { id } = useParams();
    const [packages, setPackages] = useData(id);

    return (
        <div>
            
            <div className='lg:flex grid grid-cols-1 '>
                <div className='flex items-center justify-between w-9/12  ml-[30px] lg:ml-[20px]'>
                    <div>
                        <h1 className="text-green-500 text-4xl font-bold lg:ml-[100px]  mt-[50px]">{packages.name}</h1>
                        <p className='text-gray-400 lg:ml-[100px] flex items-center mt-[20px]'><GoLocation></GoLocation>{packages.location}</p>
                    </div>
                    <div className='ml-[50px]'>
                        <div class="rating">
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        </div>
                        <p>{packages.review}</p>
                    </div>

                </div>
                <div className="ml-[100px] lg:mr-[50px]">
                    <Booking></Booking>
                </div>
            </div>
            <div class="flex flex-col w-8/12 ml-[100px] lg:mt-[-100px]">
                <div class="divider"></div>
            </div>
            <div className=' lg:ml-[100px] ml-[20px]'>
                <div class="stats shadow lg:w-9/12 w-full">

                    <div class="stat flex items-center">
                        <div>
                            <h1 className='text-4xl'><BiTime></BiTime></h1>
                        </div>
                        <div>
                            <div class="stat-title text-2xl text-green-500 font-bold">Duration</div>
                            <div class="stat-desc text-1xl font-bold">{packages.pacage}</div>
                        </div>

                    </div>

                    <div class="stat flex items-center">
                        <div>
                            <h1 className='text-4xl'><ImLocation2></ImLocation2></h1>
                        </div>
                        <div>
                            <div class="stat-title text-2xl text-green-500 font-bold">Location</div>
                            <div class="stat-desc text-1xl font-bold">{packages.location}</div>
                        </div>

                    </div>

                    <div class="stat flex items-center">
                        <div>
                            <h1 className='text-4xl'><RiHandbagFill></RiHandbagFill></h1>
                        </div>
                        <div>
                            <div class="stat-title text-2xl text-green-500 font-bold">Tour type</div>
                            <div class="stat-desc text-1xl font-bold">Package</div>
                        </div>

                    </div>
                    <div class="stat flex items-center">
                        <div>
                            <h1 className='text-4xl'><BsPeopleFill></BsPeopleFill></h1>
                        </div>
                        <div>
                            <div class="stat-title text-2xl text-green-500 font-bold">Max People</div>
                            <div class="stat-desc text-1xl font-bold">12</div>
                        </div>

                    </div>

                </div>
            </div>
            <PackagePicture></PackagePicture>
            <Footer></Footer>
        </div>
    );
};

export default PackageDetail;