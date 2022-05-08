import React from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Spinner from '../../Components/Spinner/Spinner';
import auth from '../../Utilities/Firebase/firebase.init';



const Register = () => {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    let location = useLocation();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [
        createUserWithEmailAndPassword,
        createUser,
        createUserLoading,
        createUserError,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const registerClick = async data => {
        const { registerEmail, registerPassword } = data;
        await createUserWithEmailAndPassword(registerEmail, registerPassword);

    }
    let from = location.state?.from?.pathname || "/";
    if (loading) {
        return <Spinner />;
    }
    if (createUser || user) {
        navigate(from, { replace: true });
    }

    return (
        <div className="p-10">
            <h2 className="text-3xl font-bold text-cyan-600 pb-8">Register</h2>
            <div className="w-5/6 md:w-4/6 lg:w-1/2 mx-auto bg-white rounded-lg p-2">
                {(createUserLoading) && <Spinner />}
                {(createUserError) && <p className="pl-5 text-red-600/75 text-sm">{createUserError.message}</p>}

                <form onSubmit={handleSubmit(registerClick)}>
                    <div className="mb-3">
                        <label className="text-left block mb-1 pl-3 text-sm font-medium text-gray-900 dark:text-gray-300 pr-5">
                            Email
                            {errors.registerEmail?.type === "pattern" && (<span className="pl-5 text-red-600/75 text-xs">Enter a valid email</span>)}
                            {errors.registerEmail?.type === "required" && (<span className="pl-5 text-red-600/75 text-xs">Email required</span>)}
                        </label>
                        <input type="email" placeholder="example@email.com"
                            {...register("registerEmail",
                                { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
                            className="email bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div className="mb-3">
                        <label className="text-left block mb-1 pl-3 text-sm font-medium text-gray-900 dark:text-gray-300 pr-5">
                            Password
                            {errors.registerPassword?.type === "required" && (<span className="pl-5 text-red-600/75 text-xs">Password required</span>)}
                            {errors.registerPassword?.type === "minLength" && (<span className="pl-5 text-red-600/75 text-xs">At least 6 characters</span>)}
                        </label>
                        <input type="password"
                            {...register("registerPassword",
                                { required: true, minLength: 6 })}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>

                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>

                </form>
                <div className="p-3">
                    <p>
                        Registered?
                        <Link to="/login" className="text-blue-500 hover:text-red-500 cursor-pointer"> Register</Link>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Register;