import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import PaymentModal from "../PaymentModal/PaymentModal";

const MyAppointments = () => {
  const { user } = useContext(AuthContext);
  const [booking, setBooking] = useState(null);
  const {
    data: bookings = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/bookings?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <progress className="progress w-56"></progress>;
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-3xl font-bold">My Appointment</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={booking._id}>
                <th className="text-gray-400">{++index}</th>
                <td>{booking.patient}</td>
                <td>{booking.name}</td>
                <td>{booking.appointmentDate}</td>
                <td>{booking.slot}</td>
                <td>
                  {booking?.paid ? (
                    <div>
                      <p className="text-secondary font-medium">Paid</p>
                      <p className="text-gray-500">
                        id: {booking?.transactionId}
                      </p>
                    </div>
                  ) : (
                    <label
                      onClick={() => setBooking(booking)}
                      htmlFor="paymantModal"
                      className="btn btn-sm btn-secondary text-white px-4"
                    >
                      Pay
                    </label>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {booking && (
        <PaymentModal booking={booking} refetch={refetch}></PaymentModal>
      )}
    </div>
  );
};

export default MyAppointments;
