import React from 'react';
import { XIcon, MenuIcon } from '@heroicons/react/outline';

const Header = ({ menuState }) => {
    const [isOpen, setIsOpen] = menuState;
    return (
        <div className="h-16 bg-slate-200/50 relative">
            <div className="fixed top-4 left-4 border-2 border-slate-400/75 hover:border-slate-400 hover:bg-slate-300 cursor-pointer md:hidden" onClick={() => setIsOpen(!isOpen)}>
                {
                    isOpen ?
                        <XIcon className="h-8 w-8" />
                        : <MenuIcon className="h-8 w-8" />
                }
            </div>
            <h1 className="font-mono font-bold text-4xl pt-2.5">Laptop House</h1>
        </div>
    );
};

export default Header;