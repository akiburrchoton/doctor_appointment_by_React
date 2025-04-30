import React from "react";
import Appointment from "./appointment";
import EmptyMessage from "./emptyMessage";

function Appointments({ appointedDoctors }) {
  return (
    <div className="flex flex-col items-center w-5/6 mx-auto py-20 font-main">
      <div className="text-center pb-8">
        <h1 className="text-5xl font-bold pb-4">My Today Appointments</h1>
        <p className="text-lg text-mainText/70 mx-25">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience.
        </p>
      </div>

      {appointedDoctors.map((appointedDoctor) => (
        <Appointment appointedDoctor={appointedDoctor}></Appointment>
      ))}
    </div>
  );
}

export default Appointments;
