import React from 'react';
import { GoLocation } from 'react-icons/go';
import { FiPhoneCall } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
const Contact = () => {
    const [user, loading, error] = useAuthState(auth);
    const handleContact=(event)=>{
        event.preventDefault();
        const information={
            email:event.target.email.value,
            text:event.target.subject.value,
            textArea:event.target.area.value
        }
        fetch('http://localhost:5000/information',{
            method: 'POST',
            body: JSON.stringify(information),
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
            else{
                toast("You need to login first to provide information");
            }
        })
        event.target.reset();
    }
    return (
        <div id="contact">
            <p className='text-center mt-[100px]'>CONNECT WITH US</p>
            <h1 className="text-4xl font-bold text-center">OUR CONTACTS</h1>
            <div class="stats shadow w-full px-12 mt-[50px]">

                <div class="stat">

                    <div className='flex'>
                        <h1 className='text-4xl'><GoLocation></GoLocation></h1>
                        <div className="text-2xl font-bold px-3">Head office</div>

                    </div>
                    <p className="text-gray-400 px-12">1110 20th St, Zindabazar</p>
                    <p className="text-gray-400 px-12">Sylhet, CA 95816, Bangladesh</p>
                </div>

                <div class="stat">

                    <div className='flex'>
                        <h1 className='text-4xl'><FiPhoneCall></FiPhoneCall></h1>
                        <div className="text-2xl font-bold px-3">CALL US</div>

                    </div>
                    <p className="text-gray-400 px-12">Support: 01898736556</p>
                    <p className="text-gray-400 px-12">Office: 010955367635</p>
                </div>

                <div class="stat">

                    <div className='flex'>
                        <h1 className='text-4xl'><AiOutlineMail></AiOutlineMail></h1>
                        <div className="text-2xl font-bold px-3">EMAIL US</div>

                    </div>
                    <p className="text-gray-400 px-12">computer@support.com</p>
                    <p className="text-gray-400 px-12">computer@info.com</p>
                </div>

            </div>

            <div className=' mt-[70px] grid justify-center'>
                <h1 className="text-center text-4xl font-bold">CONTACT FORM</h1>
                <div class="card w-96 bg-base-100 shadow-xl mb-10">
                    <div class="card-body">
                        <div className='grid grid-cols-1 justify-items-center gap-5 '>
                            <form onSubmit={handleContact}>
                            <input
                                type='email'
                                name="email"
                                placeholder='Email Address'
                                className='input w-full max-w-md border-orange-600 '
                                
                            />
                            <input
                                type='text'
                                name="subject"
                                placeholder='Subject'
                                className='input w-full max-w-md border-orange-600 mt-3'
                                
                            />
                            <textarea
                                className='textarea w-full max-w-md border-orange-600 mt-3'
                                name="area"
                                placeholder='Your message'
                                rows={6}
                                
                            ></textarea>
                            <button  class="btn btn-warning hover:btn-primary mt-3 ml-[100px]">Submit</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;