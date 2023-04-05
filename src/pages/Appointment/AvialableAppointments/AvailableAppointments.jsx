import { format } from "date-fns";
import React, { useState } from "react";
import AppointmentCard from "./AppointmentCard";
import AppointmentBookingModal from "./AppointmentBookingModal";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../conponents/Loading";

const AvailableAppointments = ({ selectedDate }) => {
  // const [appointments, setAppointments] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate, "PP");
  
  // TanStack React Query
  const {data:appointments=[], isLoading, refetch} = useQuery({
    queryKey: ['appointmentOptionData'],
    queryFn: () => fetch(`http://localhost:5000/appointmentOptionData?date=${date}`)
    .then(res => res.json())
  })


  if(isLoading){
    return <Loading></Loading>
  }
  /* const {data:appointments, isLoading} = useQuery({
    queryKey: ['appointmentOptionData'],
    queryFn: () => fetch(`http://localhost:5000/appointmentOptionData`)
    .then(res => res.json())
  }) */
  
  // WithOut TanStack or React Query
  /* useEffect(() => {
    fetch("http://localhost:5000/appointmentOptionData")
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, []); */

  return (
    <div className="py-20">
      <div className="max-w-[1400px] m-auto">
        <h2 className="text-cyan-500 font-bold text-center text-3xl">
          Available Services on {date}.
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
              setTreatment={setTreatment}
              refetch={refetch}
            ></AppointmentBookingModal>
          )}
        </div>
      </div>
    </div>
  );
};

export default AvailableAppointments;
