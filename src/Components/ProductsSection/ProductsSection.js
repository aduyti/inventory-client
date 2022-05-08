import { ArrowRightIcon } from '@heroicons/react/outline';
import React from 'react';
import { Link } from 'react-router-dom';
import use6Products from '../../Utilities/Hooks/use6Products';
import ProductCard from '../ProductCard/ProductCard'
import Spinner from '../Spinner/Spinner';

const ProductsSection = () => {
    const [products] = use6Products();
    return (
        <>
            <h2 className="text-3xl font-bold text-cyan-600 py-8">Our Collection</h2>
            {
                products.length === 0 ?
                    <Spinner /> :
                    <>
                        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8">
                            {
                                products.map((product) => <ProductCard key={product._id} product={product} />)
                            }
                        </div>
                        <Link to="inventory" className="text-xl font-bold pb-3 px-5 hover:text-cyan-600">
                            See All<ArrowRightIcon className="inline w-6 h-6 px-1" />
                        </Link>
                    </>
            }
        </>
    );
};

export default ProductsSection;