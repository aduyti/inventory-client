import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Utilities/Firebase/firebase.init';
import Spinner from '../../Components/Spinner/Spinner';


const Login = () => {
    const [oldUser, userLoading] = useAuthState(auth);

    const navigate = useNavigate();
    let location = useLocation();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, passwordEmailError] = useSendPasswordResetEmail(
        auth
    );
    const loginClick = data => {
        const { loginEmail, loginPassword } = data;
        signInWithEmailAndPassword(loginEmail, loginPassword)
    }
    const forgotPasswordClick = async () => {
        const email = document.getElementsByClassName("email")[0].value;
        if (/\S+@\S+\.\S+/.test(email)) {
            await sendPasswordResetEmail(email);
            toast('To Reset Password Check your email.');
        }
        else {
            toast('Please Enter your email')
        }
    }
    let from = location.state?.from?.pathname || "/";
    if (userLoading) {
        return <Spinner />;
    }
    if (user || oldUser) {
        navigate(from, { replace: true });
    }

    return (
        <div className="p-10">
            <h2 className="text-3xl font-bold text-cyan-600 pb-8">Login</h2>
            <div className="w-5/6 md:w-4/6 lg:w-1/2 mx-auto bg-white rounded-lg p-2">
                {(loading || sending) && <Spinner />}
                {(error || passwordEmailError) && <p className="pl-5 text-red-600/75 text-sm">{error.message || passwordEmailError.message}</p>}
                <form onSubmit={handleSubmit(loginClick)}>
                    <div className="mb-3">
                        <label className="text-left block mb-1 pl-3 text-sm font-medium text-gray-900 dark:text-gray-300 pr-5">
                            Email
                            {errors.loginEmail?.type === "pattern" && (<span className="pl-5 text-red-600/75 text-xs">Enter a valid email</span>)}
                            {errors.loginEmail?.type === "required" && (<span className="pl-5 text-red-600/75 text-xs">Email required</span>)}
                        </label>
                        <input type="password"
                            {...register("loginEmail",
                                { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
                            className="email bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div className="mb-3">
                        <label className="text-left block mb-1 pl-3 text-sm font-medium text-gray-900 dark:text-gray-300 pr-5">
                            Password
                            {errors.loginPassword?.type === "required" && (<span className="pl-5 text-red-600/75 text-xs">Password required</span>)}
                        </label>
                        <input type="email" placeholder="example@email.com"
                            {...register("loginPassword",
                                { required: true })}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>

                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>

                </form>
                <div className="p-3">
                    <p className="text-blue-500 hover:text-red-500 cursor-pointer" onClick={forgotPasswordClick}>Forgot Password?</p>
                    <p>
                        New Here?
                        <Link to="/register" className="text-blue-500 hover:text-red-500 cursor-pointer"> Register</Link>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Login;