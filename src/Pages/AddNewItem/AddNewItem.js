import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import addNewProduct from '../../Utilities/DBOperations/addNewProduct';
import auth from '../../Utilities/Firebase/firebase.init';

const AddNewItem = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const addClicked = (data, event) => {
        const {
            display, gpu, image, memory, name,
            price, processor, supplier, quantity,
        } = data;
        const product = {
            image, name, supplier,
            quantity: parseInt(quantity),
            price: parseInt(price),
            description: [
                processor,
                memory,
                gpu,
                display
            ],
            ownerEmail: user.email
        };
        addNewProduct(product);
        toast("New Laptop added to Inventory");
        event.target.reset();

    }
    return (
        <div className="p-10">
            <h2 className="text-3xl font-bold text-cyan-600 pb-8">Add New Laptop</h2>
            <div className="w-5/6 md:w-4/6 lg:w-1/2 mx-auto bg-white rounded-lg p-2">
                <form onSubmit={handleSubmit(addClicked)}>
                    <div className="mb-3">
                        <label className="text-left block mb-1 pl-3 text-sm font-medium text-gray-900 dark:text-gray-300">Laptop Name</label>
                        <input type="text" {...register("name", { required: true })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div className="mb-3">
                        <label className="text-left block mb-1 pl-3 text-sm font-medium text-gray-900 dark:text-gray-300">Supplier</label>
                        <input type="text" {...register("supplier", { required: true })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div className="mb-3">
                        <label className="text-left block mb-1 pl-3 text-sm font-medium text-gray-900 dark:text-gray-300">Image Link</label>
                        <input type="text" {...register("image", { required: true })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div className="mb-3">
                        <label className="text-left block mb-1 pl-3 text-sm font-medium text-gray-900 dark:text-gray-300">Unit Price</label>
                        <input type="number" {...register("price", { required: true, min: 1 })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div className="mb-3">
                        <label className="text-left block mb-1 pl-3 text-sm font-medium text-gray-900 dark:text-gray-300">Stock Quantity</label>
                        <input type="number" {...register("quantity", { required: true, min: 1 })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div className="mb-3">
                        <label className="text-left block mb-1 pl-3 text-sm font-medium text-gray-900 dark:text-gray-300">Processor</label>
                        <input type="text" {...register("processor", { required: true })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div className="mb-3">
                        <label className="text-left block mb-1 pl-3 text-sm font-medium text-gray-900 dark:text-gray-300">GPU</label>
                        <input type="text" {...register("gpu", { required: true })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div className="mb-3">
                        <label className="text-left block mb-1 pl-3 text-sm font-medium text-gray-900 dark:text-gray-300">RAM and Storage</label>
                        <input type="text" {...register("memory", { required: true })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div className="mb-3">
                        <label className="text-left block mb-1 pl-3 text-sm font-medium text-gray-900 dark:text-gray-300">Display</label>
                        <input type="text" {...register("display", { required: true })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>

                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add To Inventory</button>
                </form>
            </div>
        </div>
    );
};

export default AddNewItem;