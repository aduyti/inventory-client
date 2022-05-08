import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Utilities/Firebase/firebase.init';
import Spinner from '../Spinner/Spinner';


const ThirdPartyLogin = ({ children }) => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div className="w-1/2 mx-auto">
            <p className="text-yellow-400 font-bold mb-1">or</p>
            <p className="text-cyan-600 text-2xl font-bold mb-1">{children} with</p>
            {loading && <Spinner />}
            {error && <p className="text-red-500 text-sm">{error.message}</p>}

            <button className="w-full mx-auto block mb-1 border-2 rounded-lg border-gray-800 py-1 font-bold bg-cyan-300 hover:bg-slate-300" onClick={() => signInWithGoogle()}>Google</button>
        </div>
    );
};

export default ThirdPartyLogin;