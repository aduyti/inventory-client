import React from 'react';
import CustomNavLink from '../CustomNavLink/CustomNavLink';

const NavSideBar = ({ menuState }) => {
    const [isOpen] = menuState;

    return (
        <div className={`${isOpen ? "left-0" : "left-[-220px]"}
        h-screen bg-cyan-600/25 fixed top-16 md:left-0 ease-in duration-300 w-52 py-8`}>
            <ul className="text-left text-xl font-bold">
                <CustomNavLink to="/">Home</CustomNavLink>
                <CustomNavLink to="/blogs">Blogs</CustomNavLink>
                <CustomNavLink to="/inventory">Inventory</CustomNavLink>
                <CustomNavLink to="/inventory/my-items">My Items</CustomNavLink>
                <CustomNavLink to="/inventory/add-new">Add Item</CustomNavLink>
                <CustomNavLink to="/login">Login</CustomNavLink>
                <CustomNavLink to="/register">Register</CustomNavLink>
                <li className="block mx-3 px-auto py-2 rounded-lg hover:bg-slate-400/25 hover:text-cyan-600 cursor-pointer" onClick={() => {
                    console.log("out")
                }}>
                    <span className="pl-3" >Sign Out</span>
                </li>
            </ul>
        </div>
    );
};

export default NavSideBar;