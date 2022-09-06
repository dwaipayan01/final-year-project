import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
const SocialLogin = () => {
    return (
        <div>
             <div className="divider">OR</div>
            <button className="btn btn-outline w-full mb-3"><h1 className='text-3xl mr-3'><FcGoogle></FcGoogle></h1>Continue with Google</button>
            <button className="btn btn-outline w-full"><h1 className='text-3xl mr-3'><BsGithub></BsGithub></h1>Continue with Github</button>
        </div>
    );
};

export default SocialLogin;