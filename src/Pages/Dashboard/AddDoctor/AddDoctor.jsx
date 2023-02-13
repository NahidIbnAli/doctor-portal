import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddDoctor = () => {
  const navigate = useNavigate();
  const [btnLoading, setBtnLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { data: specialties = [], isLoading } = useQuery({
    queryKey: ["appointmentSpecialty"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/appointmentSpecialty");
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <progress className="progress w-56"></progress>;
  }

  const imageHostKey = process.env.REACT_APP_imgbb_key;

  const handleAddDoctor = (data) => {
    setBtnLoading(true);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    fetch(`https://api.imgbb.com/1/upload?key=${imageHostKey}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success) {
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            avatar: imageData.data.url,
          };
          fetch("http://localhost:5000/doctors", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((data) => {
              setBtnLoading(false);
              toast.success(`${doctor.name} is added successfully`);
              navigate("/dashboard/managedoctors");
            });
        }
      });
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Add a New Doctor</h2>
      <form
        onSubmit={handleSubmit(handleAddDoctor)}
        className="w-full max-w-md p-7 lg:p-11 rounded-xl bg-white"
      >
        <div className="form-control w-full mb-2">
          <label className="label">
            <span className="label-text text-base">Name</span>
          </label>
          <input
            {...register("name", { required: "Name is Required" })}
            type="text"
            className="input input-bordered w-full"
            placeholder="Enter Name"
          />
          {errors.name && (
            <span className="text-red-600">{errors.name.message}</span>
          )}
        </div>
        <div className="form-control w-full mb-3">
          <label className="label">
            <span className="label-text text-base">Email</span>
          </label>
          <input
            {...register("email", { required: "Email Address is Required" })}
            type="email"
            className="input input-bordered w-full"
            placeholder="Enter Email"
          />
          {errors.email && (
            <span className="text-red-600">{errors.email.message}</span>
          )}
        </div>
        <div className="form-control w-full mb-3">
          <label className="label">
            <span className="label-text text-base">Specialty</span>
          </label>
          <select
            {...register("specialty", { required: "Specialty is Required" })}
            className="select select-bordered w-full"
          >
            {specialties.map((specialty) => (
              <option key={specialty._id} value={specialty.name}>
                {specialty.name}
              </option>
            ))}
          </select>
          {errors.specialty && (
            <span className="text-red-600">{errors.specialty.message}</span>
          )}
        </div>
        <div className="form-control w-full my-6">
          <input
            {...register("image", { required: "File is required" })}
            type="file"
            className="file-input file-input-bordered w-full"
          />
          {errors.image && (
            <span className="text-red-600">{errors.image.message}</span>
          )}
        </div>
        <button
          className={`btn w-full ${btnLoading && "loading"}`}
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddDoctor;
