import React, { useContext } from "react";
import { AuthContext } from "../../../contents/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const MyAppointments = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/bookingsData?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookingsData", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>UserName</th>
            <th>TreatmentName</th>
            <th>BookingDate</th>
            <th>BookingTime</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {bookings.map((booking, i) => (
            <tr key={i}>
              <th>{i+1}</th>
              <td>{booking.userName}</td>
              <td>{booking.treatmentName}</td>
              <td>{booking.selectedDate}</td>
              <td>{booking.selectedTimeSlots}</td>
              <td><button className="btn btn-error">X</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyAppointments;
