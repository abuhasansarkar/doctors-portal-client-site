import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import Loading from '../../../conponents/Loading';

const AllDoctors = () => {

     const {data: doctorsData = [], refetch, isLoading} = useQuery({
          queryKey: 'doctorsData',
          queryFn: async() => {
               const res = await fetch('http://localhost:5000/doctorsData');
               const data = await res.json()
               console.log(data);
               return data;
          }
     })

     if(isLoading){
          return <Loading></Loading>
     }

     // Delete Doctor
     const hendelDoctor = (doctor) => {
          console.log('delete doctor',doctor);
          fetch(`http://localhost:5000/doctorsData/${doctor?._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.deletedCount > 0){
          toast.error(`${doctor.name} Successfully Deleted`);
          refetch()
        }
      });
     }

     return (
          <div className="overflow-x-auto w-full">
      <div className="mb-5">
        <h2 className="text-4xl mb-3">All Doctors</h2>
        <hr />
      </div>
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
          {doctorsData && doctorsData.map((doctor, i) => (
            <tr key={doctor._id}>
              <th>{i+1}</th>
              <td><img className='w-16 h-16 rounded-full' src={doctor.image} alt="avadar" /></td>
              <td>{doctor.name}</td>
              <td>{doctor.specialty}</td>
              <td><button onClick={()=>hendelDoctor(doctor)} className="btn btn-sm btn-error">Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
     );
};

export default AllDoctors;