import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomNavLink = ({ children, to }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({
        path: resolved.pathname,
        end: true
    });
    return (
        <li className={`${match ? " text-lime-400" : ""} 
        mx-3 px-auto py-2 rounded-lg hover:bg-slate-400/25 hover:text-cyan-400`}>
            <Link className="pl-4 block" to={to}>{children}</Link>
        </li>
    );
};

export default CustomNavLink;