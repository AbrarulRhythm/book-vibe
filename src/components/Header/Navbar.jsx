import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {

    const links = <>
        <NavLink to='/'>
            <li className='mx-2 text-base font-medium'>Home</li>
        </NavLink>
        <NavLink to='/about'>
            <li className='mx-2 text-base font-medium'>About</li>
        </NavLink>
        <NavLink to='/readList'>
            <li className='mx-2 text-base font-medium'>Read List</li>
        </NavLink>
    </>

    return (
        <header>
            <nav className=''>
                <div className='container'>
                    <div className='navbar px-0 py-6 md:py-8 lg:py-10'>
                        <div className='navbar-start'>
                            <div className='dropdown'>
                                <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
                                    <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'> <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' /> </svg>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'>
                                    {links}
                                </ul>
                            </div>
                            <a href='/' className='text-xl md:text-[28px] font-bold hover:opacity-65 duration-300' title='Book Vibe'>Book Vibe</a>
                        </div>
                        <div className='navbar-center hidden lg:flex'>
                            <ul className='menu menu-horizontal px-1'>
                                {links}
                            </ul>
                        </div>
                        <div className='navbar-end'>
                            <a className='btn'>Button</a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;