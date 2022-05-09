import { ArrowRightIcon } from '@heroicons/react/outline';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import ProductRow from '../../Components/ProductRow/ProductRow';
import Spinner from '../../Components/Spinner/Spinner';
import auth from '../../Utilities/Firebase/firebase.init';
import useProductsByEmail from '../../Utilities/Hooks/useProductsByEmail';

const MyItems = () => {
    const [user] = useAuthState(auth);

    const [products] = useProductsByEmail(user.email);
    return (
        <div className="p-10">
            <h2 className={`text-3xl font-bold pb-8 ${products.length === 0 ? "text-red-600" : "text-cyan-600"} `}>{products.length === 0 ? "You Don't Have Any!" : "My Laptops"}</h2>
            <Link to="/inventory/add-new" className="text-2xl font-bold pb-5 px-5 pt-4 text-lime-600 hover:text-cyan-700">
                Add New Laptop<ArrowRightIcon className="inline w-6 h-6 px-1" />
            </Link>

            {
                products.length === 0 ?
                    <>
                        <Spinner />
                    </>
                    :
                    products.map(product => <ProductRow key={product._id} product={product} />)
            }
        </div>
    );
};

export default MyItems;