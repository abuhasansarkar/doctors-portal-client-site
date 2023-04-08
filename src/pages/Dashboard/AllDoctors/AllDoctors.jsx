import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import Loading from "../../../conponents/Loading";
import ConfirmedModal from "../../Shared/ConfirmedModal/ConfirmedModal";
import { Link } from "react-router-dom";

const AllDoctors = () => {
  const [deleteDoctor, setDeleteDocdtor] = useState(null);
  const {
    data: doctorsData = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: "doctorsData",
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/doctorsData", {
        headers: {
          jwtAuthorization: `bearer ${localStorage.getItem("jwtAccessToken")}`,
        },
      });
      const data = await res.json();
      // console.log(data);
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  // Cencel Modal
   const cencelModal = () => {
    setDeleteDocdtor(null)
   }

  // Delete Doctor
  const hendelDeleteDoctor = (doctor) => {
    // console.log("delete doctor", doctor);
    fetch(`http://localhost:5000/doctorsData/${doctor?._id}`, {
      method: "DELETE",
      headers: {
        jwtAuthorization: `bearer ${localStorage.getItem("jwtAccessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.deletedCount > 0) {
          toast.error(`${doctor.name} Successfully Deleted`);
          refetch();
        }
      });
  };

  return (
    <div className="overflow-x-auto w-full">
      <div className="mb-5 flex justify-between items-center">
        <h2 className="text-4xl mb-3">All Doctors</h2>
        <button className="btn"><Link to='/dashboard/adddoctor'>Add Doctor</Link></button>
      </div>
      <hr />
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Avatar</th>
            <th>Name</th>
            <th>Specialty</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {doctorsData &&
            doctorsData.map((doctor, i) => (
              <tr key={doctor._id}>
                <th>{i + 1}</th>
                <td>
                  <img
                    className="w-16 h-16 rounded-full"
                    src={doctor.image}
                    alt="avadar"
                  />
                </td>
                <td>{doctor.name}</td>
                <td>{doctor.specialty}</td>
                <td>
                  <label
                    onClick={() => setDeleteDocdtor(doctor)}
                    htmlFor="confirmed-modal"
                    className="btn btn-sm btn-error"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {/* Modal */}
      {
        deleteDoctor && <ConfirmedModal
        title={`Are you sure to Delete this parson ?`}
        dis={`If you Delete this parson, You can't recover this parson next time !`}
        cencelModal={cencelModal}
        procedAction={hendelDeleteDoctor}
        modalData={deleteDoctor}
        ></ConfirmedModal>
      }
    </div>
  );
};

export default AllDoctors;
