import { Link, NavLink } from "react-router-dom"
import { useContext } from 'react'
import { AuthContext } from "../../Provider/AuthProvider";
const Navber = () => {
    const userInfo = useContext(AuthContext)
    const { user, logOut } = userInfo
    const handleUser = () => {
        logOut()
    }

    const navlinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/createtask'}>Create Task</NavLink></li>
        <li><NavLink to={'/dashboard'}>Dashboard</NavLink></li>
        <li><NavLink to={'/mytask'}>My Task</NavLink></li>


    </>
    return (
        <div className="navbar rounded-xl p-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="font-semibold menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                        {
                            navlinks
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl font-extrabold">TaskManage</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="font-semibold menu menu-horizontal px-1">
                    {
                        navlinks
                    }
                </ul>
            </div>
            <div className="navbar-end ">
                {
                    user ? <>
                        <li><NavLink className='no-underline text-lg mx-0   hover:bg-slate-800' onClick={handleUser}>logout</NavLink></li>
                    </> :
                        <>
                            <ul className="menu menu-horizontal px-1">
                                <li><NavLink className='no-underline text-base ' to='/login'>Login</NavLink></li>
                                <li><NavLink className='no-underline text-base' to='/register'>Register</NavLink></li>
                            </ul>
                        </>
                }
            </div>
        </div>
    );
};

export default Navber;