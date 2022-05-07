import React from 'react';
import CustomNavLink from '../CustomNavLink/CustomNavLink';
import { LogoutIcon } from '@heroicons/react/outline';


const NavSideBar = ({ menuState }) => {
    const [isOpen] = menuState;

    return (
        <div className={`${isOpen ? "left-0" : "left-[-220px]"}
        h-screen bg-cyan-600/75 fixed top-16 md:left-0 ease-in duration-300 md:duration-75 w-52 py-8`}>
            <ul className="text-left text-xl font-bold">
                <CustomNavLink to="/">Home</CustomNavLink>
                <CustomNavLink to="/blogs">Blogs</CustomNavLink>
                <CustomNavLink to="/inventory">Inventory</CustomNavLink>
                <CustomNavLink to="/inventory/my-items">My Items</CustomNavLink>
                <CustomNavLink to="/inventory/add-new">Add Item</CustomNavLink>
                <CustomNavLink to="/login">Login</CustomNavLink>
                <CustomNavLink to="/register">Register</CustomNavLink>
                <li className="block mx-3 px-auto py-2 rounded-lg hover:bg-slate-400/25 hover:text-cyan-400 cursor-pointer" onClick={() => {
                    console.log("out")
                }}>
                    <LogoutIcon className="pl-4 w-10 h-10 inline" /> <span className="pl-1" >Sign Out</span>
                </li>
            </ul>
        </div>
    );
};

export default NavSideBar;