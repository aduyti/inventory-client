import React from 'react';
import use6Products from '../../Utilities/Hooks/use6Products';
import ProductCard from '../ProductCard/ProductCard'

const ProductsSection = () => {
    const [products] = use6Products();
    console.log(products);
    return (
        <>
            <h2 className="text-3xl font-bold text-cyan-600 py-8">Our Collection</h2>
            <div>
                {
                    products.map((product) => <ProductCard key={product._id} product={product} />)
                }
            </div>
        </>
    );
};

export default ProductsSection;