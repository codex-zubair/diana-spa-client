import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthUserContext } from '../../Context/UserContext';
import logo from '../../Images/Logo/logo.jpg';
import { FaUser } from 'react-icons/fa';

const Navbar = () => {



    // Getting Information From API Context
    const { logout, user } = useContext(AuthUserContext);

    return (
        <nav>




            <div>
                <div className='flex justify-evenly bg-pink-500'>
                    <div className="navbar bg-pink-400">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </label>
                                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><NavLink to='/'>Home</NavLink>
                                        <li><NavLink to='/services'>Our Services</NavLink></li>
                                        <li><NavLink to='/blog'>Blog</NavLink></li>
                                        {/* IF user = login show logoout */}
                                        {user ? <li>
                                            <NavLink to='/my-reviews' className='mx-2'>My Reviews</NavLink>
                                            <NavLink to='/add-services' className='mx-2'>Add Services</NavLink>
                                            <NavLink className='btn' onClick={logout}>Logout</NavLink></li> : <li><NavLink to='/Register'>Register</NavLink></li>}
                                    </li>





                                    {/* User Photo  Conditionally Rendering */}
                                    {user ?


                                        <li title={user.displayName}>
                                            {user?.photoURL ? <div>

                                                <img width='50px' className='rounded-full' src={user?.photoURL} alt="user" />

                                            </div> : <p><FaUser /></p>}
                                            {user ? <></> : <NavLink to='/login'>Login</NavLink>}

                                        </li> :



                                        <li>
                                            {<NavLink to='/login'>Login</NavLink>}
                                        </li>}

                                    {/* User Photo  Conditionally Rendering */}



                                </ul>
                            </div>
                            <Link to={'/'} className=" normal-case text-xl flex items-center"><img className="hidden md:block btn normal-case text-xl bg-red-500 hover:bg-pink-500 mask mask-heart" src={logo} alt="img" /><span className='text-white font-semibold'>Diana SPA</span></Link>
                        </div>





                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal p-0">
                                <li>
                                    <Link to='/'>Home</Link>
                                    <li>
                                        <NavLink to='/services'>Our Services</NavLink>
                                    </li>

                                    <li>
                                        <NavLink to='/blog'>Blog</NavLink>
                                    </li>

                                </li>



                                {/* User Photo  Conditionally Rendering */}
                                {user ?


                                    <li title={user.displayName}>
                                        {user?.photoURL ? <div>

                                            <img width='50px' className='rounded-full' src={user?.photoURL} alt="user" />

                                        </div> : <p><FaUser /></p>}
                                        {user ? <></> : <NavLink to='/login'>Login</NavLink>}


                                        <NavLink to='/my-reviews' className='mx-2'>My Reviews</NavLink>
                                        <NavLink to='/add-services' className='mx-2'>Add Services</NavLink>

                                    </li> :



                                    <li>

                                    </li>}

                                {/* User Photo  Conditionally Rendering */}






                            </ul>
                        </div>
                        <div className="sm:hidden lg:flex md:flex xl:flex navbar-end">

                            <div className='mx-2'>
                                {user ? <>
                                    <NavLink className='btn' onClick={logout}>Logout</NavLink>
                                </>

                                    :

                                    <NavLink to='/Register' className='btn' >Register</NavLink>}
                            </div>

                            <div>

                                {/* IF user = login show logout */}
                                {user ? <></> :
                                    <NavLink className='btn' to='/login'>Login</NavLink>

                                }

                            </div>



                        </div>
                    </div>


                </div>
            </div>

        </nav>
    );
};

export default Navbar;