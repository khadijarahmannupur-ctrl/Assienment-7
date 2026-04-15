import React from 'react';
import { NavLink } from 'react-router';
import MyNavLinks from './MyNavLinks';
import { RiHome2Line } from 'react-icons/ri';
import { MdOutlineWatchLater } from 'react-icons/md';
import { TfiStatsUp } from 'react-icons/tfi';
import logo from '../assets/logo.png'

const Navbar = () => {
    const links = <>
        <MyNavLinks to={'/'} className={'flex'}><RiHome2Line />Home</MyNavLinks>
        <MyNavLinks to={'/timelinepage'}><MdOutlineWatchLater />Timeline</MyNavLinks>
        <MyNavLinks to={'/statspage'}><TfiStatsUp />Stats</MyNavLinks>
    </>
    return (
        <nav className='border-b border-gray-200'>
            <div className="navbar bg-base-100 container mx-auto flex justify-between items-center">

                {/* 🔹 Left side (mobile dropdown only) */}
                <div className="md:hidden">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost">
                            ☰
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
                        >
                            {links}
                        </ul>
                    </div>
                </div>

                {/* 🔹 Logo */}
                <div className="flex-1 flex justify-end md:justify-start">
                    <img src={logo} alt="logo" className="h-7" />
                </div>

                {/* 🔹 Desktop Menu */}
                <div className="hidden md:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;