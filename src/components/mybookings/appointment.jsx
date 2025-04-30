import React from "react";
import { removeFromLocalStorage } from "../../utility/localStorage";

function Appointment({ appointedDoctor }) {
  const { id, name, education, fee } = appointedDoctor;

  const handleCancelAppointment = (id) => {
    removeFromLocalStorage(id);
  };
  return (
    <div className="px-8 py-10 mb-8 bg-white w-full mx-auto rounded-2xl">
      <div className="flex justify-between border-b-2 border-dashed border-gray-200 pb-3 mb-6">
        <div>
          <h1 className="text-2xl font-bold pb-4">{name}</h1>
          <p className="text-lg text-mainText/70 ">{education}</p>
        </div>

        <div>
          <p className="text-lg text-mainText/70">
            Appointment Fee : {fee} + Vat
          </p>
        </div>
      </div>

      <a
        href="#"
        onClick={() => {
          handleCancelAppointment(id);
        }}
      >
        <button className="w-full border-1 border-red rounded-full text-red py-2 font-semibold text-xl">
          Cancel Appointment
        </button>
      </a>
    </div>
  );
}

export default Appointment;
