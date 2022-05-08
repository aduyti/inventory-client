import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
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
            {
                products.length === 0 ?
                    <Spinner /> :
                    products.map(product => <ProductRow key={product._id} product={product} />)
            }
        </div>
    );
};

export default MyItems;