import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contents/AuthProvider";
import profile from '../../../assets/icons/user.png'

const Navbar = () => {
  const { user, userLogout } = useContext(AuthContext);
  // console.log(user);
  const hendelLogout = () => {
    userLogout()
      .then(() => {
        toast.error("Successfully Logout");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navbar = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>

      <li>
        <Link to="/reviews">Reviews</Link>
      </li>
      <li>
        <Link to="/contactus">Contact Us</Link>
      </li>
    </>
  );

  return (
    <div className=" border-b-2 border-[#0FCFEC] py-3 sticky top-0 bg-white z-10">
      <div className="navbar max-w-[1440px] m-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 bg-white font-semibold shadow rounded-box w-52"
            >
              {navbar}
            </ul>
          </div>
          <Link to="/" className="font-extrabold normal-case text-xl">
            Dr.Portal
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal font-semibold px-1">{navbar}</ul>
        </div>
        <div className="navbar-end">
          <button className="btn border-0 bg-gradient-to-r from-cyan-500 to-blue-500 mr-5">
            <Link to="/appointment">Appointment</Link>
          </button>
          {user?.uid ? (
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost ring border btn-circle avatar "
              >
                <div className="w-10 rounded-full ">
                  <img src={user?.photoURL || profile } alt="profile-img" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li><Link>{user?.email}</Link></li>
                <li>
                  <Link to='/dashboard' className="justify-between">
                    Dashboard
                    <span className="badge">New</span>
                  </Link>
                </li>

                <li><button onClick={hendelLogout}>Logout</button></li>
              </ul>
            </div>
          ) : (
            <button className="btn">
              <Link to="/login">Login</Link>
            </button>
          )}
        </div>
        <label htmlFor="my-drawer-2" tabIndex={0} className="btn btn-info ml-3 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>

            </label>
      </div>
    </div>
  );
};

export default Navbar;
