import { TrashIcon } from '@heroicons/react/outline';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import itemDelete from '../../Utilities/DBOperations/itemDelete';

const ProductRow = ({ product }) => {
    const { _id, name, price, quantity, supplier, image } = product;
    const navigate = useNavigate();
    const handleDelete = id => {
        itemDelete(id);
        window.location.reload();
    }

    return (
        <div className="border-2 rounded-lg border-gray-300 bg-white p-2 my-2 w-full grid grid-cols-6 sm:grid-cols-12 gap-1 divide-x divide-y md:divide-y-0">
            <div className="w-10 h-10 mx-auto ">
                <img src={image} alt={name} className="rounded-full" />
            </div>
            <div className="col-span-3">
                <h4 className="text-2xl font-bold">{name}</h4>
            </div>
            <div className="col-span-2">
                <h4 className="text-xl font-bold">{supplier}</h4>
            </div>
            <div className="col-span-2">
                <h4 className="font-bold ">${price}</h4>
            </div>
            <div className="">
                <h4 className="font-bold ">{quantity}</h4>
            </div>
            <div className="col-span-2">
                <button className="font-bold text-cyan-600 hover:text-lime-800"
                    onClick={() => {
                        navigate(`/inventory/${_id}`)
                    }}>Manage</button>
            </div>
            <div className="">
                <button onClick={() => handleDelete(_id)}><TrashIcon className="w-8 h-8 hover:text-red-600" /></button>
            </div>

        </div >
    );
};

export default ProductRow;