import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentCard from "./AppointmentCard";
import AppointmentBookingModal from "./AppointmentBookingModal";

const AvailableAppointments = ({ selectedDate }) => {
  const [appointments, setAppointments] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("appointmentOptiondata.json")
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, []);

  return (
    <div className="py-20">
      <div className="max-w-[1400px] m-auto">
        <h2 className="text-cyan-500 font-bold text-center text-3xl">
          Available Services on {format(selectedDate, "PP")}.
        </h2>
        ;
        <div className="all-appointment grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          {appointments.map((appointmentCard) => (
            <AppointmentCard
              key={appointmentCard._id}
              appointmentCard={appointmentCard}
              setTreatment={setTreatment}
            ></AppointmentCard>
          ))}

          {/* Booking Modal  */}
          {treatment && (
            <AppointmentBookingModal
              treatment={treatment}
              selectedDate={selectedDate}
            ></AppointmentBookingModal>
          )}
        </div>
      </div>
    </div>
  );
};

export default AvailableAppointments;
