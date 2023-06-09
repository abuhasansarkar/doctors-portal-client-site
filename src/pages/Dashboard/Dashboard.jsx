import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="lg:flex justify-between gap-10">
      <div className="card w-full mb-5 lg:mb-0 bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">All Appointments</h2>
          
          <div className="card-actions justify-end">
            <Link to='/dashboard/myappointments' className="btn">See More</Link>
          </div>
        </div>
      </div>
      <div className="card w-full mb-5 lg:mb-0 bg-info text-primary-content">
        <div className="card-body">
          <h2 className="card-title">All Users</h2>
          
          <div className="card-actions justify-end">
            <Link to='/dashboard/allusers' className="btn">See More</Link>
          </div>
        </div>
      </div>
      <div className="card w-full mb-5 lg:mb-0 bg-accent text-primary-content">
        <div className="card-body">
          <h2 className="card-title">All Doctors Info</h2>
          
          <div className="card-actions justify-end">
            <Link to='/dashboard/alldoctors' className="btn">Doctors</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
