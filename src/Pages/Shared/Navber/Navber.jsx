import { Link, NavLink } from "react-router-dom";
import './nav.css'
import { useContext } from "react";
import { AuthContext } from "../../../Firebase/FirebaseProvider";
import userDemo from '../../../assets/user.png'


const Navber = () => {
    const { user, logOut } = useContext(AuthContext)
    //   user Log Out
    const handleLogOut = () => {
        logOut()
    }
    const navlinks = <div>
        <nav>
            <NavLink to='/'>Home</NavLink>
            {/* <NavLink to='/login'>Update Profile</NavLink> */}
            <NavLink to='/profile'>Update Profile</NavLink>
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
                        <div className="tooltip tooltip-left " data-tip={user.displayName}>
                            <img className="rounded-full w-12" src={user?.photoURL ? user.photoURL : userDemo} alt='Photo' />
                        </div>
                        <Link to='/login'><button onClick={handleLogOut} className="btn">Log Out</button></Link>
                    </div> :
                        <Link to='/login'><button className="btn">Login</button></Link>
                }

            </div>
        </div>
    );
};

export default Navber;





// import { Link, NavLink } from "react-router-dom";
// import './nav.css';
// import { useContext, useState } from "react";
// import { AuthContext } from "../../../Firebase/FirebaseProvider";
// import userDemo from '../../../assets/user.png';

// const Navber = () => {
//     const { user, logOut } = useContext(AuthContext);
//     const [showTooltip, setShowTooltip] = useState(false); // Manage tooltip visibility

//     // Handle user log out
//     const handleLogOut = () => {
//         logOut();
//     };

//     // Navigation links
//     const navlinks = (
//         <div>
//             <nav>
//                 <NavLink to="/">Home</NavLink>
//                 <NavLink to="/profile">Update Profile</NavLink>
//                 <NavLink to="/tool">tool</NavLink>
//             </nav>
//         </div>
//     );

//     return (
//         <div className="navbar bg-base-100">
//             {/* Navbar Start */}
//             <div className="navbar-start">
//                 <div className="dropdown">
//                     <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-5 w-5"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                         >
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="2"
//                                 d="M4 6h16M4 12h8m-8 6h16"
//                             />
//                         </svg>
//                     </div>
//                     <ul
//                         tabIndex={0}
//                         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
//                     >
//                         {navlinks}
//                     </ul>
//                 </div>
//                 <a className="btn btn-ghost text-xl">Real State</a>
//             </div>

//             {/* Navbar Center */}
//             <div className="navbar-center hidden lg:flex">
//                 <ul className="menu menu-horizontal px-1">
//                     {navlinks}
//                 </ul>
//             </div>

//             {/* Navbar End */}
//             <div className="navbar-end">
//                 {user ? (
//                     <div
//                         className="flex items-center relative"
//                         onMouseEnter={() => setShowTooltip(true)}
//                         onMouseLeave={() => setShowTooltip(false)}
//                     >
//                         {/* Profile Image */}
//                         <img
//                             className="rounded-full w-12 cursor-pointer"
//                             src={user?.photoURL ? user.photoURL : userDemo}
//                             alt="Photo"
//                         />

//                         {/* Tooltip */}
//                         {showTooltip && (
//                             <div className="tooltip absolute top-[5px] left-1/2 transform -translate-x-40 bg-gray-700 text-white text-sm px-2 py-1 rounded">
//                                 {user?.displayName || "User"} {/* Fallback name */}
//                             </div>
//                         )}

//                         {/* Log Out Button */}
//                         <Link to="/login">
//                             <button onClick={handleLogOut} className="btn ml-2">
//                                 Log Out
//                             </button>
//                         </Link>
//                     </div>
//                 ) : (
//                     <Link to="/login">
//                         <button className="btn">Login</button>
//                     </Link>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Navber;
