import React, { useContext } from "react";
import { Link } from "react-router-dom";
import useAdmin from "../../Hooks/UseAdminHooks/useAdmin";
import { AuthContext } from "../../contents/AuthProvider";

const Sidebar = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);

  return (
    <>
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
      <ul className="menu py-4 w-52 text-base-content bg-white font-bold">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/dashboard/myappointments">My Appointments</Link>
        </li>
        {isAdmin && (
          <li>
            <Link to="/dashboard/allusers">All Users</Link>
          </li>
        )}
        <li>
          <Link>Add New </Link>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
