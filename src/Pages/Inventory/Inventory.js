import React from 'react';
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
                    <Spinner /> :
                    products.map(product => <ProductRow key={product._id} product={product} />)
            }
        </div>
    );
};

export default Inventory;