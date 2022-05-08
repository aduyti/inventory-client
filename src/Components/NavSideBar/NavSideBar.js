import React from 'react';
import CustomNavLink from '../CustomNavLink/CustomNavLink';
import { LogoutIcon } from '@heroicons/react/outline';
import auth from '../../Utilities/Firebase/firebase.init';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import Spinner from '../Spinner/Spinner';


const NavSideBar = ({ menuState }) => {
    const [isOpen] = menuState;
    const [user, loading] = useAuthState(auth);


    return (
        <div className={`${isOpen ? "left-0" : "left-[-220px]"}
        h-screen bg-cyan-600/75 fixed top-16 md:left-0 ease-in duration-300 md:duration-75 w-52 py-8`}>
            <ul className="text-left text-xl font-bold">
                <CustomNavLink to="/">Home</CustomNavLink>
                <CustomNavLink to="/blogs">Blogs</CustomNavLink>
                {
                    loading ? <Spinner /> :
                        user ?
                            <>
                                <CustomNavLink to="/inventory">Inventory</CustomNavLink>
                                <CustomNavLink to="/inventory/my-items">My Laptops</CustomNavLink>
                                <CustomNavLink to="/inventory/add-new">Add New</CustomNavLink>
                                <li className="block mx-3 px-auto py-2 rounded-lg hover:bg-slate-400/25 hover:text-cyan-400 cursor-pointer" onClick={() => { signOut(auth) }}>
                                    <LogoutIcon className="pl-4 w-10 h-10 inline" /> <span className="pl-1" >Sign Out</span>
                                </li>
                            </> :
                            <>
                                <CustomNavLink to="/login">Login</CustomNavLink>
                                <CustomNavLink to="/register">Register</CustomNavLink>
                            </>
                }
            </ul>
        </div>
    );
};

export default NavSideBar;