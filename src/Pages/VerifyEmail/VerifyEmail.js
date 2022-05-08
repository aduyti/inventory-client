import { ArrowRightIcon } from '@heroicons/react/outline';
import React from 'react';
import { Link } from 'react-router-dom';

const VerifyEmail = () => {
    return (
        <div className="p-10">
            <h2 className="text-4xl font-bold text-red-600 pt-8 pb-4">Please Verify Your Email</h2>
            <Link to="/" className="text-2xl font-bold pb-3 px-5 text-lime-600 hover:text-cyan-700">
                Go to Home<ArrowRightIcon className="inline w-6 h-6 px-1" />
            </Link>

        </div>
    );
};

export default VerifyEmail;