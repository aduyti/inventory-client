import React from 'react';
import use6Products from '../../Utilities/Hooks/use6Products';
import ProductCard from '../ProductCard/ProductCard'

const ProductsSection = () => {
    const [products] = use6Products();
    return (
        <>
            <h2 className="text-3xl font-bold text-cyan-600 py-8">Our Collection</h2>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8">
                {
                    products.map((product) => <ProductCard key={product._id} product={product} />)
                }
            </div>
        </>
    );
};

export default ProductsSection;