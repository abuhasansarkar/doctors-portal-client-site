import React from "react";

const AppointmentCard = ({appointmentCard, setTreatment}) => {
     const { name, slots} = appointmentCard;
  return (
    <div className="card bg-base-100 shadow-xl text-center">
      <div className="card-body">
        <h2 className="text-3xl text-cyan-500">{name}</h2>
        <strong>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</strong>
        <h5>{slots.length > 0 ? slots[0] : 'Try Another Day'}</h5>
        <div className="card-actions justify-center">
          <label onClick={() => setTreatment(appointmentCard)} htmlFor="bookingModal" className="btn border-0 bg-gradient-to-r from-cyan-500 to-blue-500">Book Appointment</label>
          
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
