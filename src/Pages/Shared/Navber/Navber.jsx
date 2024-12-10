import { Link, NavLink } from "react-router-dom";
import './nav.css'
import { useContext } from "react";
import { AuthContext } from "../../../Firebase/FirebaseProvider";
import userDemo from '../../../assets/user.png'


const Navber = () => {
    const {user,logOut} = useContext(AuthContext)
     //   user Log Out
     const handleLogOut = ()=>{
        logOut()
    }
    const navlinks = <div>
        <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/login'>Update Profile</NavLink>
        <NavLink to='/register'>Register</NavLink>
        <NavLink to='/profile'>User Profile</NavLink>
        </nav>

    </div>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navlinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Real State</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <div className="flex items-center">
                        <img className="rounded-full w-14" src={user?.photoURL ? user.photoURL : userDemo } alt='Photo' />
                        <Link to='/login'><button  onClick={handleLogOut} className="btn">Log Out</button></Link>
                    </div>: 
                    <Link to='/login'><button className="btn">Login</button></Link>
                }
                
            </div>
        </div>
    );
};

export default Navber;