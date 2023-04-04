import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
      <ul className="menu p-4 w-80 text-base-content">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/dashboard/myappointments">My Appointments</Link>
        </li>
        <li>
          <Link>Add New </Link>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
