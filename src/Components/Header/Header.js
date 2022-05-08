import React from 'react';
import { XIcon, MenuIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

const Header = ({ menuState }) => {
    const [isOpen, setIsOpen] = menuState;
    return (
        <div className="fixed top-0 left-0 w-full">
            <div className="h-16 bg-slate-200/70 relative p-3">
                <div className="absolute top-4 left-4 border-2 rounded border-slate-400/75 hover:border-slate-400 hover:bg-slate-300 cursor-pointer md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {
                        isOpen ?
                            <XIcon className="h-8 w-8" />
                            : <MenuIcon className="h-8 w-8" />
                    }
                </div>
                <Link className="font-mono font-extrabold text-4xl text-cyan-700" to="/">Laptop <span className="text-lime-700">House</span></Link>
            </div>
        </div>
    );
};

export default Header;