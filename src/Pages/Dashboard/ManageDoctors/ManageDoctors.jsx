import { useQuery } from "@tanstack/react-query";
import React from "react";
import swal from "sweetalert";
import "./ManageDoctors.css";

const ManageDoctors = () => {
  const {
    data: doctors = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["managedoctors"],
    queryFn: async () => {
      const res = await fetch(
        "https://doctorsportalserver.vercel.app/doctors",
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const data = res.json();
      return data;
    },
  });

  if (isLoading) {
    return <progress className="progress w-56"></progress>;
  }

  const handleRemoveDoctor = (id) => {
    swal({
      title: "Are you sure?",
      text: "",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://doctorsportalserver.vercel.app/doctors/${id}`, {
          method: "DELETE",
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            swal("Doctor Removed!", {
              icon: "success",
            });
            refetch();
          });
      }
    });
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">
        Manage Doctors: {doctors?.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
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
            {doctors.map((doctor, index) => (
              <tr key={doctor._id}>
                <th className="text-gray-400">{++index}</th>
                <td>
                  <div className="avatar">
                    <div className="w-16 rounded-full">
                      <img src={doctor.avatar} alt="" />
                    </div>
                  </div>
                </td>
                <td>{doctor.name}</td>
                <td>{doctor.specialty}</td>
                <td>
                  <button
                    onClick={() => handleRemoveDoctor(doctor._id)}
                    className="btn btn-sm btn-error text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctors;
