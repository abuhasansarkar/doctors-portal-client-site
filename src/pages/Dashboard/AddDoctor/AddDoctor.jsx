import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { data: appointmentSpecialty = [] } = useQuery({
    queryKey: ["appointmentSpecialty"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/appointmentSpecialty");
      const data = await res.json();
      return data;
    },
  });

//   Images Hosting 
  const imgHostingKey = process.env.REACT_APP_imgHostingKey;
  const hendelAddDoctor= (data) => {
       const image = data.image[0];
     //   console.log(data);
       const formData = new FormData();
       formData.append('image', image);
       const imgUrl = `https://api.imgbb.com/1/upload?expiration=600&key=${imgHostingKey}`
       fetch(imgUrl, {
          method: 'POST',
          body: formData
       })
       .then(res => res.json())
       .then(imgData => {
          // console.log(imgData)
          if(imgData.success){
               // console.log(imgData.data.url);
               const doctorData = {
                    name: data.name,
                    email: data.email,
                    specialty: data.specialty,
                    image: imgData.data.url
               }
               fetch(`http://localhost:5000/doctorsData`, {
                    method: 'POST',
                    headers: {
                         'content-type': 'application/json'
                    },
                    body: JSON.stringify(doctorData)
               })
               .then(res => res.json())
               .then((result) => {
                    console.log(result);
                    if(result.acknowledged){
                         toast.success('Docotor Added Successfully.')
                    }
               })
          }
       })
       
  }

  return (
    <div>
      <div className="mb-5">
        <h2 className="text-4xl mb-3">My Appointments</h2>
        <hr />
      </div>

      <form
        className="w-1/2 m-auto border border-green-400 rounded-xl p-10 mt-10 shadow-2xl"
        onSubmit={handleSubmit(hendelAddDoctor)}
      >
        <label htmlFor="name">Name</label>
        {errors.name && <p className="text-red-500">{errors.name?.message}</p>}
        <input
          className="input input-bordered input-accent w-full mb-5"
          htmlFor="name"
          {...register("name", { required: "Name is Requred !" })}
          aria-invalid={errors.name ? "true" : "false"}
          placeholder="Enter Your Name"
        />
        <label htmlFor="email">Email</label>
        {errors.email && <p className="text-red-500">{errors.email?.message}</p>}
        <input
          className="input input-bordered input-accent w-full mb-5"
          htmlFor="email"
          {...register("email", { required: "Email is Requred !" })}
          aria-invalid={errors.email ? "true" : "false"}
          placeholder="Enter Your Email"
        />

        <label htmlFor="specialty">Select Specialty...</label>
        {errors.specialty && <p className="text-red-500">{errors.specialty?.message}</p>}
        <select
          htmlFor="specialty"
          className="input input-bordered input-accent w-full mb-5"
          {...register("specialty", { required: "Specialty is Requried !" })}
        >
          {appointmentSpecialty.map((specialty) => (
            <option key={specialty._id} value={specialty.name}>
              {specialty.name}
            </option>
          ))}
        </select>
        <label htmlFor="img">Upload a image</label>
        {errors.image && <p className="text-red-500">{errors.image?.message}</p>}
        <input
          htmlFor="img"
          className="input input-bordered input-accent w-full mb-5"
          type="file"
          {...register("image", { required: "Images Upload is required" })}
          aria-invalid={errors.image ? "true" : "false"}
        />
        <button  className="btn btn-success w-full" type="submit" >Add Docotr</button>
      </form>
    </div>
  );
};

export default AddDoctor;
