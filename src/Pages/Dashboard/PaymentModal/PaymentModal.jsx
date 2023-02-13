import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_stripe_pk);

const PaymentModal = ({ booking, refetch }) => {
  const { name, patient, price, appointmentDate, slot } = booking;
  return (
    <div>
      <input type="checkbox" id="paymantModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="paymantModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h4 className="font-bold text-lg text-secondary mb-1">
            Hello, {patient}
          </h4>
          <h3 className="font-bold text-xl">Please Pay for {name}</h3>
          <p className="py-3">
            Your Appointment:{" "}
            <span className="font-medium text-warning">{appointmentDate}</span>{" "}
            at {slot}
          </p>
          <h3 className="font-bold text-xl">Please Pay: ${price}</h3>
          <div>
            <Elements stripe={stripePromise}>
              <CheckoutForm booking={booking} refetch={refetch}></CheckoutForm>
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
