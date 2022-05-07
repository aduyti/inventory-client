import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { _id, name, description, price, quantity, supplier, image } = product;
    const navigate = useNavigate();
    return (
        <div className="border-2 rounded-lg border-gray-400 w-64 h-[400px] mx-auto mb-8 bg-white">
            <h3 className="text-2xl font-bold">{name}</h3>
            <img src={image} alt={name} className="h-40 w-full rounded" />
            <div className="text-left pl-3 text-slate-500 py-3">
                <h4 className="text-xl font-semibold ">Supplier : {supplier}</h4>
                {
                    description.map(line => <p className="text-sm" key={line}>{line}</p>)
                }
            </div>
            <div className="flex justify-between px-5 pb-3">
                <h4 className="text-xl font-semibold text-slate-500">${price}</h4>
                <h4 className="text-xl font-semibold text-slate-500">{quantity}pcs</h4>
            </div>
            <button type="button"
                className="w-full bg-cyan-500 rounded-b font-semibold py-1 "
                onClick={() => {
                    navigate(`./inventory/${_id}`)
                }}>Manage</button>
        </div >
    );
};

export default ProductCard;