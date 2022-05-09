import { ArrowRightIcon } from '@heroicons/react/outline';
import React from 'react';
import { Link } from 'react-router-dom';
import ProductRow from '../../Components/ProductRow/ProductRow';
import Spinner from '../../Components/Spinner/Spinner';
import useProducts from '../../Utilities/Hooks/useProducts';

const Inventory = () => {
    const [products] = useProducts();
    return (
        <div className="p-10">
            <h2 className="text-3xl font-bold text-cyan-600 pb-8">Laptops In Stock</h2>
            {
                products.length === 0 ?
                    <>
                        <Spinner />
                        <Link to="/" className="text-2xl font-bold pb-3 px-5 pt-8 text-lime-600 hover:text-cyan-700">
                            Go to Home<ArrowRightIcon className="inline w-6 h-6 px-1" />
                        </Link>

                    </> :
                    products.map(product => <ProductRow key={product._id} product={product} />)
            }
        </div>
    );
};

export default Inventory;