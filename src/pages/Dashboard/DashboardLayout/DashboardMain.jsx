import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';

const DashboardMain = () => {
     return (
          <>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile m-auto">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col p-10">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side bg-white -z-0 border-r-2 border-[#0FCFEC]">
          <Sidebar></Sidebar>
        </div>
      </div>
    </>
     );
};

export default DashboardMain;