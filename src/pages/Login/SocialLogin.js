import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import auth from '../../firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';
const SocialLogin = () => {
    const navigate=useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const handleGoogle=()=>{
        signInWithGoogle();
    }
    const handleGithub=()=>{
        signInWithGithub();
    }
    let errorHandle;
    if (error || error1) {
        errorHandle = <p className="text-red-500 text-center">{error?.message} {error1?.message}</p>
    }
    if (user || user1) {
        navigate("/home");
    }
    if(loading || loading1){
        return <Loading></Loading>
    }
    return (
        <div>
             <div className="divider">OR</div>
            <button onClick={handleGoogle} className="btn btn-outline w-full mb-3"><h1 className='text-3xl mr-3'><FcGoogle></FcGoogle></h1>Continue with Google</button>
            <button onClick={handleGithub} className="btn btn-outline w-full"><h1 className='text-3xl mr-3'><BsGithub></BsGithub></h1>Continue with Github</button>
            {errorHandle}
        </div>
    );
};

export default SocialLogin;