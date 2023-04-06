import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex justify-between gap-5">
      <div className="card w-96 bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">All Appointments</h2>
          
          <div className="card-actions justify-end">
            <Link to='/dashboard/myappointments' className="btn">See More</Link>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-info text-primary-content">
        <div className="card-body">
          <h2 className="card-title">All Admin</h2>
          
          <div className="card-actions justify-end">
            <Link to='/dashboard/myappointments' className="btn">See More</Link>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-accent text-primary-content">
        <div className="card-body">
          <h2 className="card-title">Add New</h2>
          
          <div className="card-actions justify-end">
            <Link to='/dashboard/myappointments' className="btn">See More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
