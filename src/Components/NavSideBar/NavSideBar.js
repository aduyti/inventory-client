import React from 'react';

const NavSideBar = ({ menuState }) => {
    const [isOpen] = menuState;

    return (
        <div className={` ${isOpen ? "left-0" : "left-[-220px]"}
        h-screen bg-gray-400/75 fixed top-16 md:left-0 ease-in duration-300 w-52`}>
            nav
        </div>
    );
};

export default NavSideBar;