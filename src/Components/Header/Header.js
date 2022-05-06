import React from 'react';
import { XIcon, MenuIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

const Header = ({ menuState }) => {
    const [isOpen, setIsOpen] = menuState;
    return (
        <div className="h-16 bg-slate-200/50 relative p-3">
            <div className="fixed top-4 left-4 border-2 rounded border-slate-400/75 hover:border-slate-400 hover:bg-slate-300 cursor-pointer md:hidden" onClick={() => setIsOpen(!isOpen)}>
                {
                    isOpen ?
                        <XIcon className="h-8 w-8" />
                        : <MenuIcon className="h-8 w-8" />
                }
            </div>
            <Link className="font-mono font-extrabold text-4xl text-cyan-500" to="/">Laptop <span className="text-lime-500">House</span></Link>
        </div>
    );
};

export default Header;