import React, { useContext } from "react";
import { Link } from "react-router-dom";
import useAdmin from "../../Hooks/UseAdminHooks/useAdmin";
import { AuthContext } from "../../contents/AuthProvider";

const Sidebar = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);

  return (
    <>
      <label htmlFor="sidebar" className="drawer-overlay"></label>
      <ul className="menu py-4 w-52 bg-white lg:bg-transparent font-bold">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>

        {isAdmin && (
          <>
            <li>
              <Link to="/dashboard/allusers">All Users</Link>
            </li>

            <li>
              <Link to="/dashboard/alldoctors">All Doctors </Link>
            </li>
            <li>
              <Link to="/dashboard/adddoctor">Add a Doctor </Link>
            </li>
          </>
        )}
        <li>
          <Link to="/dashboard/myappointments">My Appointments</Link>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
