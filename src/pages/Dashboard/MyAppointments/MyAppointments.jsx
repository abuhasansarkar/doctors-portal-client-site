import React, { useContext } from "react";
import { AuthContext } from "../../../contents/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../conponents/Loading";

const MyAppointments = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/bookingsData?email=${user?.email}`;
  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ["bookingsData", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          jwtAuthorization: `bearer ${localStorage.getItem('jwtAccessToken')}`
        }
      });
      const data = await res.json();
      return data;
    },
  });

  if(isLoading){
    return <Loading></Loading>
  }

  return (
    <div className="overflow-x-auto w-full">
      <div className="mb-5">
        <h2 className="text-4xl mb-3">My Appointments</h2>
        <hr />
      </div>
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>UserName</th>
            <th>TreatmentName</th>
            <th>BookingDate</th>
            <th>BookingTime</th>
            <th>Payment Now</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {bookings && bookings.map((booking, i) => (
            <tr key={i}>
              <th>{i+1}</th>
              <td>{booking.userName}</td>
              <td>{booking.treatmentName}</td>
              <td>{booking.selectedDate}</td>
              <td>{booking.selectedTimeSlots}</td>
              <td><button className="btn btn-sm">Pay</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyAppointments;
