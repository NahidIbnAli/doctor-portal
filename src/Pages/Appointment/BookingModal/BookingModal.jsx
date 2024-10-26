import { format } from "date-fns";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
  const { user } = useContext(AuthContext);
  const { name, slots, price } = treatment;

  const date = format(selectedDate, "PP");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const patient = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const slot = form.slot.value;
    const booking = {
      appointmentDate: date,
      name,
      slot,
      patient,
      email,
      phone,
      price,
    };
    fetch("https://doctorsportalserver.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setTreatment(null);
          toast.success("Booking has been confirmed");
          refetch();
        } else {
          toast.error(data.message);
          setTreatment(null);
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg text-accent font-bold">{name}</h3>
          {user?.uid ? (
            <form onSubmit={handleSubmit} className="mt-10 grid gap-6">
              <input
                type="text"
                value={date}
                className="input input-bordered w-full"
                disabled
              />
              <select name="slot" className="select select-bordered w-full">
                {slots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
              <input
                name="name"
                type="text"
                defaultValue={user?.displayName}
                className="input input-bordered w-full"
                placeholder="Full Name"
                required
                readOnly
              />
              <input
                name="email"
                type="email"
                defaultValue={user?.email}
                className="input input-bordered w-full"
                placeholder="Email"
                required
                readOnly
              />
              <input
                name="phone"
                type="text"
                className="input input-bordered w-full"
                placeholder="Phone Number"
                required
              />
              <button type="submit" className="btn">
                Submit
              </button>
            </form>
          ) : (
            <p className="text-center py-5">
              Welcome! Please{" "}
              <Link to="/login" className="font-semibold text-secondary">
                Login
              </Link>{" "}
              to continue.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
