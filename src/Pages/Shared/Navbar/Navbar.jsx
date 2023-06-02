import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {

    const navOption = <>
        <li><Link to="/">Home</Link></li>
    </>

    return (
        <div className="w-full bg-black/60 z-10 p-2 text-white fixed">
            <div className="flex justify-between max-w-screen-xl mx-auto  items-center">
                <div className="">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black hover:text-red-500">
                            {navOption}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-2xl">Movie Store</a>
                </div>
                <div className=" hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-xl hover:text-red-500">
                        {navOption}
                    </ul>
                </div>
                <div className="">
                    <FaUserCircle className="text-4xl"></FaUserCircle>
                </div>
            </div>
        </div>
    );
};

export default Navbar;