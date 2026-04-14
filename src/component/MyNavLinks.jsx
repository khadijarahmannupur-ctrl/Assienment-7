import React from 'react';
import { NavLink } from 'react-router';

const MyNavLinks = ({children, to, className}) => {
    return (
            <NavLink to={to} className={({isActive}) => `${isActive && 'bg-[#244D3F] text-white'} btn text-[#64748B] font-medium text-[16px] hover:opacity-90 transition rounded-md`}>

            <button className='flex justify-center items-center gap-2'>{children}</button>

          </NavLink>
    );
};

export default MyNavLinks;