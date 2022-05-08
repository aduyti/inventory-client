import React from 'react';
import ProductRow from '../../Components/ProductRow/ProductRow';
import Spinner from '../../Components/Spinner/Spinner';
import useProductsByEmail from '../../Utilities/Hooks/useProductsByEmail';

const MyItems = () => {
    const [products] = useProductsByEmail("mozibar@gmail.com");
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