import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../../Components/Spinner/Spinner';
import updateItemQuantity from '../../Utilities/DBOperations/updateItemQuantity';
import useProduct from '../../Utilities/Hooks/useProduct';
import { toast } from 'react-toastify';

const ProductManage = () => {
    const { id } = useParams();
    const [product] = useProduct(id);
    const [quantity, setQuantity] = useState(0);
    const [deliver, setDeliver] = useState(1);
    const [stock, setStock] = useState(1);
    useEffect(() => {
        setQuantity(product.quantity);
    }, [product])

    const setAlert = (target, callback) => {
        toast("minimum value is 1");
        target.value = 1;
        callback(1);
    }
    const blurDeliver = event => {
        const num = parseInt(event.target.value);
        num > 0 ? setDeliver(num) :
            setAlert(event.target, setDeliver);
    }
    const blurStock = event => {
        const num = parseInt(event.target.value);
        num > 0 ? setStock(num) :
            setAlert(event.target, setStock);
    }

    const handleDeliver = () => {
        if (quantity < deliver) {
            toast("Over The Limit");
        }
        else {
            setQuantity(quantity - deliver);
            updateItemQuantity(quantity - deliver, product?._id);
            toast(`${deliver} ${product.name} delivered`);
        }
    }
    const handleStock = () => {
        setQuantity(quantity + stock);
        updateItemQuantity(quantity + stock, product?._id);
        toast(`${stock} ${product.name} stocked`);
    }
    return (
        <div className="p-10">
            {
                product?._id ?
                    <>
                        <h2 className="text-3xl font-bold text-cyan-600 pb-8">Laptop's Details</h2>
                        <h2 className="text-3xl font-bold pb-2">{product.name}</h2>
                        <div className="w-5/6 md:w-4/6 lg:w-1/2 mx-auto bg-white rounded-lg">
                            <img src={product.image} alt={product.name} className="w-full py-2 mb-4 border-2 border-gray-200 rounded-lg" />
                            <div className="text-left font-bold text-2xl px-4">
                                <h3 >Supplier : {product.supplier}</h3>
                                <h3 >Description:</h3>
                                <ul className="pl-3 font-semibold text-xl pb-3">
                                    <li>Processor {product.description[0]}</li>
                                    <li>{product.description[1]}</li>
                                    <li>GPU {product.description[2]}</li>
                                    <li>{product.description[3]}</li>
                                </ul>
                                <h4 className="text-slate-500">Price : ${product.price}</h4>
                                <h4 className="text-slate-500 text-lg">Stock Quantity : {quantity}pcs</h4>
                            </div>
                            <div className="grid gap-4 grid-cols-2 py-5 px-5">
                                <div className="">
                                    <input type="number" className="block w-full border-2 rounded-lg border-gray-800 py-1 pl-4" defaultValue="1" min="1" onBlur={blurDeliver} />
                                </div>
                                <div className="">
                                    <button type="button" className="block w-full border-2 rounded-lg border-gray-800 py-1 font-bold hover:bg-slate-300" onClick={handleDeliver}>Deliver</button>
                                </div>
                            </div>
                            <div className="grid gap-4 grid-cols-2 pb-3 px-5">
                                <div className="">
                                    <input type="number" className="block w-full border-2 rounded-lg border-gray-800 py-1 pl-4" defaultValue="1" min="1" onBlur={blurStock} />
                                </div>
                                <div className="">
                                    <button type="button" className="block w-full border-2 rounded-lg border-gray-800 py-1 font-bold hover:bg-slate-300" onClick={handleStock}>Stock</button>
                                </div>
                            </div>
                        </div>
                    </> :
                    <>
                        <h2 className="text-3xl font-bold text-red-600 pb-8">Laptop Not Available</h2>
                        <Spinner />
                    </>
            }
        </div>
    );
};

export default ProductManage;